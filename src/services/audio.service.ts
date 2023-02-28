import { Config } from '../config';
import {
  AudioConfig,
  AuthenticateConfig,
  AuthenticateRequest,
  AuthenticateResponse,
  CreateEnrolledEventRequest,
  CreateEnrollmentEventConfig,
  CreateEnrollmentConfig,
  CreateEnrollmentRequest,
  CreateEnrollmentResponse,
  GetModelsRequest,
  GetModelsResponse,
  ThresholdSensitivity,
  TranscribeConfig,
  TranscribeRequest,
  TranscribeResponse,
  ValidateEventConfig,
  ValidateEventRequest,
  ValidateEventResponse,
  ValidateEnrolledEventRequest,
  ValidateEnrolledEventConfig,
  ValidateEnrolledEventResponse,
  SynthesizeSpeechResponse,
  SynthesizeSpeechRequest,
  VoiceSynthesisConfig,
  TranscribeWord,
  TranscribeWordResponse,
  CustomVocabularyWords,
} from '../generated/v1/audio/audio_pb';
import {
  AudioBiometricsClient,
  AudioEventsClient,
  AudioModelsClient,
  AudioSynthesisClient,
  AudioTranscriptionsClient,
} from '../generated/v1/audio/audio_grpc_pb';
import { ITokenManager } from '../token-manager/token.manager';
import * as grpc from '@grpc/grpc-js';

export type EnrollmentIdentifier =
  | { enrollmentId: string; enrollmentGroupId?: never }
  | { enrollmentId?: never; enrollmentGroupId: string };

/** Handles all audio requests to Sensory Cloud */
export class AudioService {
  constructor(
    private readonly tokenManager: ITokenManager,
    private modelsClient: AudioModelsClient | undefined = undefined,
    private biometricsClient: AudioBiometricsClient | undefined = undefined,
    private eventClient: AudioEventsClient | undefined = undefined,
    private transcribeClient: AudioTranscriptionsClient | undefined = undefined,
    private synthesisClient: AudioSynthesisClient | undefined = undefined
  ) {}

  /**
   * Fetch all the audio models supported by your instance of Sensory Cloud.
   * @returns Promise<GetModelsResponse.AsObject>
   */
  public async getModels(): Promise<GetModelsResponse.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new GetModelsRequest();

      this.getModelsClient().getModels(request, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Stream audio to Sensory Cloud as a means for user enrollment.
   * Only biometric models may be used with the streamEnrollment method.
   *
   * @param  {string} description - a description of this enrollment. Useful if a user could have multiple enrollments, as it helps differentiate between them.
   * @param  {string} userId - the unique userId for this enrollment.
   * @param  {string} modelName - the exact name of the model you intend to enroll into. This model name can be retrieved from the getModels() call.
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @param  {string} referenceId? - the external referenceId for this enrollment. Can be used by you in any way.
   * @param  {boolean} disableServerEnrollmentStorage? - If true, this will prevent the server from storing enrollment tokens locally and force the server to always return a token upon successful enrollment
   * @returns Promise<grpc.ClientDuplexStream<CreateEnrollmentRequest, CreateEnrollmentResponse>> - a bidirectional stream where CreateEnrollmentRequests can be passed to the cloud and CreateEnrollmentResponses are passed back
   */
  public async streamEnrollment(
    description: string,
    userId: string,
    modelName: string,
    isLivenessEnabled: boolean,
    audioConfig: AudioConfig.AsObject,
    referenceId?: string,
    disableServerEnrollmentStorage?: boolean
  ): Promise<
    grpc.ClientDuplexStream<CreateEnrollmentRequest, CreateEnrollmentResponse>
  > {
    const sdkConfig = Config.getSharedConfig();
    const enrollmentStream = this.getBioClient().createEnrollment();

    const request = new CreateEnrollmentRequest();
    const config = new CreateEnrollmentConfig();
    const audio = new AudioConfig();

    config.setDescription(description);
    config.setUserid(userId);
    config.setDeviceid(sdkConfig.deviceId);
    config.setModelname(modelName);
    config.setIslivenessenabled(isLivenessEnabled);
    if (disableServerEnrollmentStorage != undefined) {
      config.setDisableserverenrollmenttemplatestorage(
        disableServerEnrollmentStorage
      );
    }

    if (referenceId) {
      config.setReferenceid(referenceId);
    }

    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }

  /**
   * Authenticate against an existing audio enrollment in Sensory Cloud.
   * Only biometric models may be used with the streamAuthentication method.
   *
   * @param  {EnrollmentIdentifier} enrollment - the enrollmentId or groupId
   * @param  {boolean} isLivenessEnabled - indicates if liveness is enabled for this request
   * @param  {ThresholdSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {AuthenticateConfig.ThresholdSecurity=AuthenticateConfig.ThresholdSecurity.HIGH} security - the security threshold enforced by the recognition engine. Defaults to high.
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @param  {Uint8Array} enrollmentToken? - Encrypted enrollment token that was provided on enrollment, pass undefined if no token was provided
   * @returns Promise<grpc.ClientDuplexStream<AuthenticateRequest, AuthenticateResponse>> - a bidirectional stream where AuthenticateRequests can be passed to the cloud and AuthenticateResponses are passed back
   */
  public async streamAuthentication(
    enrollment: EnrollmentIdentifier,
    isLivenessEnabled: boolean,
    sensitivity: ThresholdSensitivity = ThresholdSensitivity.MEDIUM,
    security: AuthenticateConfig.ThresholdSecurity = AuthenticateConfig
      .ThresholdSecurity.HIGH,
    audioConfig: AudioConfig.AsObject,
    enrollmentToken?: Uint8Array
  ): Promise<
    grpc.ClientDuplexStream<AuthenticateRequest, AuthenticateResponse>
  > {
    const authenticationStream = this.getBioClient().authenticate();

    const request = new AuthenticateRequest();
    const config = new AuthenticateConfig();
    const audio = new AudioConfig();

    if (enrollment.enrollmentId) {
      config.setEnrollmentid(enrollment.enrollmentId);
    }

    if (enrollment.enrollmentGroupId) {
      config.setEnrollmentgroupid(enrollment.enrollmentGroupId);
    }

    config.setSensitivity(sensitivity);
    config.setSecurity(security);
    config.setIslivenessenabled(isLivenessEnabled);
    if (enrollmentToken != undefined) {
      config.setEnrollmenttoken(enrollmentToken);
    }

    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    authenticationStream.write(request);

    return authenticationStream;
  }

  /**
   * Stream audio to Sensory Cloud in order to recognize a specific phrase or sound
   *
   * @param  {string} modelName - the exact name of the model you intend to recognize against. This model name can be retrieved from the getModels() call.
   * @param  {string} userId - the unique userId for the user requesting this event
   * @param  {ThresholdSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @returns Promise<grpc.ClientDuplexStream<ValidateEventRequest, ValidateEventResponse>> - a bidirectional stream where ValidateEventRequests can be passed to the cloud and ValidateEventResponses are passed back
   */
  public async streamEvent(
    userId: string,
    modelName: string,
    sensitivity: ThresholdSensitivity = ThresholdSensitivity.MEDIUM,
    audioConfig: AudioConfig.AsObject
  ): Promise<
    grpc.ClientDuplexStream<ValidateEventRequest, ValidateEventResponse>
  > {
    const eventStream = this.getEventClient().validateEvent();

    const request = new ValidateEventRequest();
    const config = new ValidateEventConfig();
    const audio = new AudioConfig();

    config.setModelname(modelName);
    config.setUserid(userId);
    config.setSensitivity(sensitivity);
    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    eventStream.write(request);

    return eventStream;
  }

  /**
   * Stream audio to Sensory Cloud as a means for general audio enrollment.
   * Enrolled events are not subjected to the same rigor that biometric enrollments are.
   * Any non-biometric enrollable model may be used with streamCreateEnrolledEvent.
   *
   * @param  {string} description - a description of this enrollment. Useful if a user could have multiple enrollments, as it helps differentiate between them.
   * @param  {string} userId - the unique userId for this enrollment.
   * @param  {string} modelName - the exact name of the model you intend to enroll into. This model name can be retrieved from the getModels() call.
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @param  {string} referenceId? - the external referenceId for this enrollment. Can be used by you in any way.
   * @returns Promise<grpc.ClientDuplexStream<CreateEnrolledEventRequest, CreateEnrollmentResponse>> - a bidirectional stream where CreateEnrolledEventRequests can be passed to the cloud and CreateEnrollmentResponses are passed back
   */
  public async streamCreateEnrolledEvent(
    description: string,
    userId: string,
    modelName: string,
    audioConfig: AudioConfig.AsObject,
    referenceId?: string
  ): Promise<
    grpc.ClientDuplexStream<
      CreateEnrolledEventRequest,
      CreateEnrollmentResponse
    >
  > {
    const enrollmentStream = this.getEventClient().createEnrolledEvent();

    const request = new CreateEnrolledEventRequest();
    const config = new CreateEnrollmentEventConfig();
    const audio = new AudioConfig();

    config.setDescription(description);
    config.setUserid(userId);
    config.setModelname(modelName);

    if (referenceId) {
      config.setReferenceid(referenceId);
    }

    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    enrollmentStream.write(request);

    return enrollmentStream;
  }

  /**
   * Validate against an existing enrolled event in Sensory Cloud.
   * Enrolled events are not subjected to the same rigor that biometric enrollments are.
   * Any enrollable model may be used with streamValidateEnrolledEvent.
   *
   * @param  {EnrollmentIdentifier} enrollment - the enrollmentId or groupId
   * @param  {ThresholdSensitivity=ThresholdSensitivity.MEDIUM} sensitivity - the sensitivity of the recognition engine. Defaults to medium.
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @param  {Uint8Array} enrollmentToken? - Encrypted enrollment token that was provided on enrollment, pass undefined if no token was provided
   * @returns Promise<grpc.ClientDuplexStream<ValidateEnrolledEventRequest, ValidateEnrolledEventResponse>> - a bidirectional stream where ValidateEnrolledEventRequests can be passed to the cloud and ValidateEnrolledEventResponses are passed back
   */
  public async streamValidateEnrolledEvent(
    enrollment: EnrollmentIdentifier,
    sensitivity: ThresholdSensitivity = ThresholdSensitivity.MEDIUM,
    audioConfig: AudioConfig.AsObject,
    enrollmentToken?: Uint8Array
  ): Promise<
    grpc.ClientDuplexStream<
      ValidateEnrolledEventRequest,
      ValidateEnrolledEventResponse
    >
  > {
    const authenticationStream = this.getEventClient().validateEnrolledEvent();

    const request = new ValidateEnrolledEventRequest();
    const config = new ValidateEnrolledEventConfig();
    const audio = new AudioConfig();

    if (enrollment.enrollmentId) {
      config.setEnrollmentid(enrollment.enrollmentId);
    }

    if (enrollment.enrollmentGroupId) {
      config.setEnrollmentgroupid(enrollment.enrollmentGroupId);
    }

    config.setSensitivity(sensitivity);

    if (enrollmentToken != undefined) {
      config.setEnrollmenttoken(enrollmentToken);
    }

    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    config.setAudio(audio);
    request.setConfig(config);

    // Send config
    authenticationStream.write(request);

    return authenticationStream;
  }

  /**
   * Stream audio to Sensory Cloud in order to transcribe spoken words
   *
   * @param  {string} modelName - the exact name of the model you intend to use for transcription. This model name can be retrieved from the getModels() call.
   * @param  {string} userId - the unique userId for the user requesting this event
   * @param  {AudioConfig.AsObject} audioConfig - the specifics of the audio data
   * @param  {boolean} enablePunctuationCapitalization - if true, the resulting transcript will include punctuation and capitalization.
   * @param  {boolean} doSingleUtterance - if true, the server will automatically close the stream once the user stops talking.
   * @param  {ThresholdSensitivity=ThresholdSensitivity.LOW} vadSensitivity - the sensitivity of the voice activity detector. Defaults to LOW.
   * @param  {number} vadDuration - the duration of silence to detect before automatically closing the stream as a number of seconds. Defaults to 1 second.
   * @param  {ThresholdSensitivity=ThresholdSensitivity.MEDIUM} customVocabThreshold - How much we should prioritize custom vocab when running audio through the language model
   * @param  {string} customVocabID - The ID of the custom vocab if you've stored it in the backend
   * @param  {Array<string>=[]} customVocabWords - Your own custom vocab to include with this request
   * @returns Promise<grpc.ClientDuplexStream<TranscribeResponse, TranscribeResponse>> - a bidirectional stream where TranscribeRequests can be passed to the cloud and TranscribeResponses are passed back
   */
  public async streamTranscription(
    modelName: string,
    userId: string,
    audioConfig: AudioConfig.AsObject,
    enablePunctuationCapitalization: boolean,
    doSingleUtterance: boolean,
    vadSensitivity: ThresholdSensitivity = ThresholdSensitivity.LOW,
    vadDuration = 0,
    customVocabThreshold: ThresholdSensitivity = ThresholdSensitivity.MEDIUM,
    customVocabID = '',
    customVocabWords: Array<string> = []
  ): Promise<grpc.ClientDuplexStream<TranscribeRequest, TranscribeResponse>> {
    const transcriptionStream = this.getTranscribeClient().transcribe();

    const request = new TranscribeRequest();
    const config = new TranscribeConfig();
    const audio = new AudioConfig();

    config.setModelname(modelName);
    config.setUserid(userId);
    config.setEnablepunctuationcapitalization(enablePunctuationCapitalization);
    config.setDosingleutterance(doSingleUtterance);
    config.setVadsensitivity(vadSensitivity);
    config.setVadduration(vadDuration);
    audio.setEncoding(audioConfig.encoding);
    audio.setSampleratehertz(audioConfig.sampleratehertz);
    audio.setAudiochannelcount(audioConfig.audiochannelcount);
    audio.setLanguagecode(
      audioConfig.languagecode || Config.defaultLanguageCode
    );

    //Note that if the user specifies both a custom vocab ID and a list of custom words
    //They will be merged server side into a single custom vocab lexical tree.
    if (customVocabID != '') {
      //If the user specified a specific custom vocab ID that is stored server side
      //add it to the custom vocab field in the config packet
      config.setCustomvocabularyid(customVocabID);
    }

    if (customVocabWords.length > 0) {
      const cvWords = new CustomVocabularyWords();
      customVocabWords.forEach((element) => {
        cvWords.addWords(element);
      });
      config.setCustomwordlist(cvWords);
    }

    config.setCustomvocabrewardthreshold(customVocabThreshold);

    config.setAudio(audio);
    request.setConfig(config);

    // Stop Microphone on stream end
    transcriptionStream.write(request);

    return transcriptionStream;
  }

  /**
   * Sends a request to Sensory Cloud to synthesize speech
   *
   * @param {string} phrase - The text phrase to synthesize a voice saying
   * @param {string} modelName - The name of the voice to use during speech synthesis
   * @param {number} sampleRateHertz? - Optional, the sample rate for the synthesized audio, if undefined audio will be 16kHz
   * @returns Promise<grpc.ClientReadableStream<SynthesizeSpeechResponse>> - a stream of audio data with the synthesized voice.
   *          The first response will contain audio config information, all subsequent responses will contain audio data
   */
  public async synthesizeSpeech(
    phrase: string,
    modelName: string,
    sampleRateHertz?: number
  ): Promise<grpc.ClientReadableStream<SynthesizeSpeechResponse>> {
    const voiceConfig = new VoiceSynthesisConfig();
    voiceConfig.setModelname(modelName);
    voiceConfig.setSampleratehertz(sampleRateHertz ?? 16000);

    const request = new SynthesizeSpeechRequest();
    request.setPhrase(phrase);
    request.setConfig(voiceConfig);

    const synthesisStream = this.getSynthesisClient().synthesizeSpeech(request);

    return synthesisStream;
  }

  private getModelsClient(): AudioModelsClient {
    if (this.modelsClient == undefined) {
      this.modelsClient = new AudioModelsClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.modelsClient;
  }

  private getBioClient(): AudioBiometricsClient {
    if (this.biometricsClient == undefined) {
      this.biometricsClient = new AudioBiometricsClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.biometricsClient;
  }

  private getEventClient(): AudioEventsClient {
    if (this.eventClient == undefined) {
      this.eventClient = new AudioEventsClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.eventClient;
  }

  private getTranscribeClient(): AudioTranscriptionsClient {
    if (this.transcribeClient == undefined) {
      this.transcribeClient = new AudioTranscriptionsClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.transcribeClient;
  }

  private getSynthesisClient(): AudioSynthesisClient {
    if (this.synthesisClient == undefined) {
      this.synthesisClient = new AudioSynthesisClient(
        Config.getHost(),
        this.tokenManager.getCallCredentials()
      );
    }
    return this.synthesisClient;
  }
}

// FullTranscriptAggregator aggregates and stores transcription responses.
// This class can be used to maintain the full transcript returned from the server.
export class FullTranscriptAggregator {
  // Hold onto the entire transcript as an array of words
  private currentWordList: TranscribeWord.AsObject[] = [];

  // Process a single, sliding-window response from the server
  public processResponse(response?: TranscribeWordResponse) {
    // If nothing is returned, do nothing
    if (!response || !response.getWordsList().length) {
      return;
    }

    // Get the expected transcript size from the index of the last word.
    const responseSize = response.getLastwordindex() + 1;

    // Loop through returned words and set the returned value at the specified index in currentWordList
    for (const word of response.getWordsList()) {
      this.currentWordList[word.getWordindex()] = word.toObject();
    }

    // Check if the transcript is smaller than our currentWordList
    if (responseSize < this.currentWordList.length) {
      // Remove trailing elements from the array
      this.currentWordList.splice(response.getLastwordindex() - 1);
    }
  }

  // Returns the cache of words returned from the server
  public getCurrentWordList(): TranscribeWord.AsObject[] {
    return this.currentWordList;
  }

  // Returns the full transcript as computed from the current word list
  public getCurrentTranscript(delimiter = ' '): string {
    if (!this.currentWordList.length) {
      return '';
    }

    return this.currentWordList.map((word) => word.word.trim()).join(delimiter);
  }
}
