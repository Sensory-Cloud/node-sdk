import { VideoService, Initializer, HealthService, OauthService, TokenManager, Video } from '@sensory-cloud/node-sdk';
import * as http from 'http';
import * as fs from 'fs';
import { InsecureCredentialStore } from '../credential/credential';

async function videoExample() {
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

  // Create a new video service to handle all video requests to SensoryCloud
  const videoService = new VideoService(tokenManger);

  // Get all models from SensoryCloud. All endpoints will require you specify a unique model name.
  const userId = 'unique-user-id-in-your-system';
  const description = 'enrollment of my user in the office';
  const referenceId = 'an-id-for-your-use';
  const enableLiveness = true;
  const liveFramesRequired = 1;

  const videoEnrollmentStream = await videoService.streamEnrollment(
    description,
    userId,
    'face_recognition',
    enableLiveness,
    Video.RecognitionThreshold.MEDIUM,
    liveFramesRequired,
    referenceId
  );

  const captureAndSendFrame = async () => {
    // One way to load data is by reading a file. This could also be a data stream from a client.
    // We load the entire face into memory and use it to enroll.
    // In production, you should not use the same image for enrollment, instead you should use 25 unique frames
    const enrollmentFile = fs.readFileSync(`${__dirname}/../face.jpg`);

    const request = new Video.CreateEnrollmentRequest();
    request.setImagecontent(enrollmentFile);

    try {
      videoEnrollmentStream?.write(request);
    } catch (err) {
      console.error(err);
    }
  }

  // Handle responses from gRPC
  let enrollmentId: string|null = null;
  videoEnrollmentStream.on('data', async (response) => {
    const currentResult = {
      percentComplete: response.getPercentcomplete(),
      isAlive: response.getIsalive(),
      score: response.getScore()
    }

    console.log(currentResult);

    enrollmentId = response.getEnrollmentid();
    await captureAndSendFrame();
  });

  // Handle end of stream
  const enrollmentComplete = new Promise<void>((resolve, reject) => {
    videoEnrollmentStream?.on('end', async (status) => {
      if (status?.code !== 0 || !enrollmentId?.length) {
        reject(status);
      } else {
        resolve();
      }
    });
  });

  // Process first frame
  await captureAndSendFrame();
  await enrollmentComplete;

  if (!enrollmentId) {
    throw new Error('Enrollment failed!');
  }

  console.log(`Enrolled with enrollmentID ${enrollmentId}!`);

  // Stream authentication
  const authenticationStream = await videoService.streamAuthentication(
    {enrollmentId: enrollmentId},
    enableLiveness,
    Video.RecognitionThreshold.MEDIUM,
  );

  let isAuthenticated = false;
  authenticationStream.on('data', async (response) => {
    const currentVideoResult = {
      isAlive: response.getIsalive(),
      score: response.getScore(),
      success: response.getSuccess()
    }

    console.log(currentVideoResult);

    isAuthenticated = response.getSuccess();
    await captureAndSendFrame();
  });

  // Handle end of stream
  const authenticationComplete = new Promise<void>((resolve, reject) => {
    authenticationStream.on('end', async (status) => {
      if (status?.code !== 0 || !isAuthenticated) {
        reject(status);
      } else {
        resolve();
      }
    });
  });

  // Process first frame
  await captureAndSendFrame();
  return await authenticationComplete;

  console.log('Authentication complete!')
}

if (require.main === module) {
  // Example server
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  // Run video example
  videoExample().catch((err) => console.error(err));

  // Listen on the desired port
  server.listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://'127.0.0.1':3000/`);
  });
}
