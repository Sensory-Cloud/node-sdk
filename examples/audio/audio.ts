import { AudioService, Initializer, ISecureCredentialStore, ManagementService, OauthService, TokenManager } from 'sensory-cloud';
import * as fs from 'fs';

async function main() {
  // Create a credential store
  const credentialStore = new InsecureCredentialStore();
  const oauthService = new OauthService(credentialStore);
  const envFilePath = `${__dirname}/example-credentials.ini`

  // Register our SDK with SensoryCloud.
  await Initializer.initializeFromConfig(envFilePath, oauthService)

  // Create tokenManager now that we're registered. This handles fetching and refreshing Oauth tokens behind the scenes.
  const tokenManger = new TokenManager(oauthService);

  // Create a new audio service to handle all audio requests to SensoryCloud
  const audioService = new AudioService(tokenManger);

  // Get all models from SensoryCloud. All endpoints will require you specify a unique model name.
  const models = await audioService.getModels()
  console.log(models)
}

if (require.main === module) {
  await main();
}

// This implementation is not secure. It is up to you to store your credentials in
// a secure storage such as an encrypted database or HSM.
export class InsecureCredentialStore implements ISecureCredentialStore {
  private readonly credentialPath = './insecure-credentials.txt'

  saveCredentials(clientId: string, clientSecret: string): void {
    fs.writeFileSync(this.credentialPath, `${clientId}:${clientSecret}`);
  }

  async getClientId(): Promise<string> {
    const credentials = fs.readFileSync(this.credentialPath, 'utf8');
    if (!credentials.length) {
      throw new Error('clientId could not be obtained: credentials are not stored')
    }

    return credentials.split(':')[0];
  }

  async getClientSecret(): Promise<string> {
    const credentials = fs.readFileSync(this.credentialPath, 'utf8');
    if (!credentials.length) {
      throw new Error('clientId could not be obtained: credentials are not stored')
    }

    return credentials.split(':')[1];
  }
}