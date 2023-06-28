import { AudioService, Initializer, HealthService, OauthService, TokenManager, Audio, FullTranscriptAggregator } from '@sensory-cloud/node-sdk';
import * as http from 'http';
import * as fs from 'fs';
import * as grpc from '@grpc/grpc-js';
import { InsecureCredentialStore } from '../credential/credential';
import { AudioConfig, CustomVocabularyWords, TranscribeConfig } from '../../build/main/generated/v1/audio/audio_pb';

async function audioExample() {
  // Create a credential store
  const credentialStore = new InsecureCredentialStore();
  const healthService = new HealthService();
  const oauthService = new OauthService(credentialStore);
  const envFilePath = `${__dirname}/../credentials.ini`

  // Register our SDK with SensoryCloud.
  await Initializer.initializeFromConfig(envFilePath, oauthService)

  const health = await healthService.getHealth();
  console.log(health)

  // Get Info about me
  const device = await oauthService.getWhoAmI();
  console.log(device)

  // Create tokenManager now that we're registered. This handles fetching and refreshing Oauth tokens behind the scenes.
  const tokenManger = new TokenManager(oauthService);

  // Create a new audio service to handle all audio requests to SensoryCloud
  const audioService = new AudioService(tokenManger);

  // Model name retrieved from the getModels() function
  const modelName = 'speech_recognition_en';
  const userId = 'a-unique-user-id';
  const enablePunctuationAndCapitalization = false;

  // You can enable a VAD (Voice Activity Detector) in order to cut the stream once voice activity is no longer detected
  const doKillOnVoiceActivityLost = false;

  // If you do enable the VAD, you can set the threshold
  const vadSensitivity = Audio.ThresholdSensitivity.MEDIUM;
  const vadDurationSeconds = 1;

  // Custom vocabulary is a powerful tool to add custom words like company names to the language model
  const customVocabThredhold = Audio.ThresholdSensitivity.MEDIUM;

  // The first word in the string is the word that should be spit out by our engine.
  // Possible pronunciations of that word follow the root word with comas
  const customVocabWords = ['SensoryCloud,Sensory Cloud, SenCiri Cloud'];

  // We only support this audio config for now.
  // Linear16 is a .wav file. All audio data must be at 16KHz.
  const audioConfig: Audio.AudioConfig.AsObject = {
    encoding: Audio.AudioConfig.AudioEncoding.LINEAR16,
    sampleratehertz: 16000,
    audiochannelcount: 1,
    languagecode: 'en-us',
  }

  const config = new TranscribeConfig();
  const audio = new AudioConfig();

  config.setModelname(modelName);
  config.setUserid(userId);
  config.setEnablepunctuationcapitalization(true);
  config.setDosingleutterance(doKillOnVoiceActivityLost);
  config.setVadsensitivity(vadSensitivity);
  config.setVadduration(vadDurationSeconds);
  config.setEnablepunctuationcapitalization(enablePunctuationAndCapitalization);
  audio.setEncoding(audioConfig.encoding);
  audio.setSampleratehertz(audioConfig.sampleratehertz);
  audio.setAudiochannelcount(audioConfig.audiochannelcount);

  if (customVocabWords.length > 0) {
    const cvWords = new CustomVocabularyWords();
    customVocabWords.forEach((element) => {
      cvWords.addWords(element);
    });
    config.setCustomwordlist(cvWords);
  }

  config.setCustomvocabrewardthreshold(customVocabThredhold);
  config.setAudio(audio);

  // Path to the directory of files you'd like to iterator over - in this case, get all wav files from the directory above
  const directory = `${__dirname}/..`;

  const dir = fs.opendirSync(directory)
  let dirent
  while ((dirent = dir.readSync()) !== null) {
    if ((dirent.name as string).endsWith('.wav')) {
      // Init the transcription bi-directional stream
      const transcriptionStream = await audioService.streamTranscription(config);

      const transcript = await transcribe(`${directory}/${dirent.name}`, transcriptionStream)

      // Append results to a file
      const testName = (dirent.name as string).replace('.wav', '')
      fs.appendFileSync('cv-test-en-US.hyp', `${transcript} (${testName})\n`);
    }
  }
  dir.closeSync()
}

async function transcribe(filePath: string, transcriptionStream: grpc.ClientDuplexStream<Audio.TranscribeRequest, Audio.TranscribeResponse>): Promise<string> {
  // One way to load data is by reading a file. This could also be a data stream from a client.
  // We set highWaterMark to ensure the chunk size is below 600ms for improved performance
  const transcriptionFile = fs.createReadStream(filePath, { highWaterMark: 16 * 1024 });

  // Data is streamed back to the SDK in windowed-chunks. This aggregator takes care of client-side logic
  // to reconstruct the full transcript.
  const aggregator = new FullTranscriptAggregator();

  // Send all new data to the cloud
  transcriptionFile.on('data', (chunk) => {
    const request = new Audio.TranscribeRequest();
    request.setAudiocontent(chunk);

    try {
      transcriptionStream?.write(request);
    } catch (err) {
      console.error(err);
    }
  });

  // Wait for the file to complete. Then, set the FINAL message to have the transcription engine complete the last request.
  transcriptionFile.on('end', () => {
    const request = new Audio.TranscribeRequest();

    // Send the final message
    const action = new Audio.AudioRequestPostProcessingAction();
    action.setAction(Audio.AudioPostProcessingAction.FINAL);
    action.setActionid("action-id");

    request.setPostprocessingaction(action);
    request.setAudiocontent("");

    try {
      transcriptionStream?.write(request);
    } catch (err) {
      console.error(err);
    }
  });

  // Handle responses from gRPC
  transcriptionStream.on('data', (response: Audio.TranscribeResponse) => {
    aggregator.processResponse(response.getWordlist());

    // If this is the final message
    if (response.getPostprocessingaction()?.getAction() === Audio.AudioPostProcessingAction.FINAL) {
      transcriptionStream.end();
    }
  });

  // Handle end of the transcription stream
  const transcribeComplete = new Promise<void>((resolve) => {
    transcriptionStream.on('end', resolve);
  });

  // Transcribe stream is closed
  await transcribeComplete.finally(() => transcriptionFile.close());

  // Final transcript
  return aggregator.getCurrentTranscript();
}

if (require.main === module) {
  // Example server
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  // Run audio example
  audioExample().catch((err) => console.error(err));

  // Listen on the desired port
  server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://'127.0.0.1':3000/`);
  });
}
