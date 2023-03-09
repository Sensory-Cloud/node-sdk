import { VideoService, Initializer, HealthService, OauthService, TokenManager } from '@sensory-cloud/node-sdk';
import * as http from 'http';
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
  const models = await videoService.getModels();
  console.log(models)
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
