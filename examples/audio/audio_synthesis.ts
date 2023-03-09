import { AudioService, Initializer, HealthService, OauthService, TokenManager, Audio } from '@sensory-cloud/node-sdk';
import * as http from 'http';
import * as fs from 'fs';
import { InsecureCredentialStore } from '../credential/credential';

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

  // Synthesize audio using a model returned from the GetModels call
  const phrase = "This is a phrase that I want to synthesize into audio!"
  const synthesisStream = await audioService.synthesizeSpeech(phrase, 'text_to_spectrogram_donna_en-us', 44100);

  // Create audio buffer and set filepath
  const filePath = `${__dirname}/../phrase.wav`;


  // Collect data from the stream response
  synthesisStream.on('data', (response: Audio.SynthesizeSpeechResponse) => {
    if (response.getAudiocontent()) {
      const buffer = response.getAudiocontent_asU8();
      fs.appendFileSync(filePath, buffer);
    }
  });

  const streamEnd = new Promise<void>((resolve, reject) => {
    synthesisStream.on('end', async (status) => {
      if (status?.code !== 0) {
        reject(status);
      }
      resolve();
    });
  })

  await streamEnd;
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
