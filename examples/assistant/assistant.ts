import { Initializer, ISecureCredentialStore, AssistantService, OauthService, TokenManager, Assistant } from '@sensory-cloud/node-sdk';
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

  // Create assistant service to make calls to SensoryCloud assistant endpoints
  const assistantService = new AssistantService(tokenManger);

  // Create chat request
  const request = new Assistant.TextChatRequest();
  const message = new Assistant.ChatMessage();
  message.setRole(Assistant.ChatRole.USER);
  message.setContent("tell me how large language models work.");
  request.addMessages(message);

  // Get a chat response
  const response = await assistantService.chat(request);

  if (!response.getMessage()) {
    throw Error('No message returned!');
  }

  // Print response
  console.log(response.toObject);

  // Add response message to the buffer
  request.addMessages(response.getMessage());

  // Add new message
  message.setContent("Nice! Tell me more!")

  // Get a chat response
  const response2 = await assistantService.chat(request);

  if (!response2.getMessage()) {
    throw Error('No message returned!');
  }

  // Print response
  console.log(response2.toObject);
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