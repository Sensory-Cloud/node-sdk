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

  // Start an enrollment request
  const description = 'A test enrollment';
  const userId = 'a-unique-user-id';

  // Model name retrieved from the getModels() function
  // text-dependent means the user will need to speak a phrase several times to enroll
  const modelName = 'text-dependent-16kHz.ubm';

  // Liveness only works with text-independent models
  const enableLiveness = false;

  // We only support this audio config for now.
  // Linear16 is a .wav file. All audio data must be at 16KHz.
  const audioConfig: Audio.AudioConfig.AsObject = {
    encoding: Audio.AudioConfig.AudioEncoding.LINEAR16,
    sampleratehertz: 16000,
    audiochannelcount: 1,
    languagecode: 'en-us',
  }

  // Create the bi-directional stream
  const audioEnrollmentStream = await audioService.streamEnrollment(
    description, userId, modelName, enableLiveness, audioConfig);

  // Create an enrollmentID to be populated
  let enrollmentId: string | undefined;

  // One way to load data is by reading a file. This could also be a data stream from a client.
  // We set highWaterMark to ensure the chunk size is below 600ms for improved performance
  const enrollmentFile = fs.createReadStream(`${__dirname}/../audio.wav`, { highWaterMark: 128 * 1024 });

  // Send all new data to the cloud
  enrollmentFile.on('data', (chunk) => {
    const request = new Audio.CreateEnrollmentRequest();
    request.setAudiocontent(chunk);

    try {
      audioEnrollmentStream?.write(request);
    } catch (err) {
      console.error(err);
    }
  });

  // Handle responses from the server
  audioEnrollmentStream.on('data', (response: Audio.CreateEnrollmentResponse) => {
    console.log(response.toObject());

    if (response.getModelprompt()?.length) {
      // TODO: Liveness was enabled - prompt the user to say what is set here
    }

    // Enrollment is complete - save this enrollmentId for later
    if (response.getEnrollmentid()?.length) {
      enrollmentId = response.getEnrollmentid();
    }
  });

  // Handle end of the enrollment stream
  const enrollmentComplete = new Promise<void>((resolve) => {
    audioEnrollmentStream.on('end', resolve);
  });

  // Enrollment stream is closed
  await enrollmentComplete.finally(() => enrollmentFile.close());

  // Enrollment is complete!
  if (!enrollmentId) {
    throw new Error('Enrollment failed!');
  }

  console.log('Enrollment succeeded!')

  // Now let's authenticate
  const sensitivity = Audio.ThresholdSensitivity.MEDIUM;
  const security = Audio.AuthenticateConfig.ThresholdSecurity.HIGH;
  const audioAuthenticationStream = await audioService.streamAuthentication(
    {enrollmentId: enrollmentId}, enableLiveness, sensitivity, security, audioConfig);

  // Load authentication file
  const authFile = fs.createReadStream(`${__dirname}/../Audio.wav`, { highWaterMark: 128 * 1024 });

  // Boolean to keep track of auth success
  let success = false;

  // Send all new data to the cloud
  authFile.on('data', (chunk) => {
    const request = new Audio.AuthenticateRequest();
    request.setAudiocontent(chunk);

    try {
      audioAuthenticationStream?.write(request);
    } catch (err) {
      console.error(err);
    }
  });

  // Handle responses from the server
  audioAuthenticationStream.on('data', (response: Audio.AuthenticateResponse) => {
    console.log(response.toObject());

    if (response.getModelprompt()?.length) {
      // TODO: Liveness was enabled - prompt the user to say what is set here
    }

    // Authentication was successful!
    if (response.getSuccess()) {
      success = true;
    }
  });

  // Handle end of the auth stream
  const authComplete = new Promise<void>((resolve) => {
    audioAuthenticationStream.on('end', resolve);
  });

  // Enrollment stream is closed
  await authComplete.finally(() => authFile.close());

  // Enrollment is complete!
  if (!success) {
    throw new Error('Authentication failed!');
  }

  console.log('Authentication succeeded!')
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
