import * as fs from 'fs';
import { ISecureCredentialStore } from '@sensory-cloud/node-sdk';


// This implementation is not secure. It is up to you to store your credentials in
// a secure storage such as an encrypted database or HSM.
export class InsecureCredentialStore implements ISecureCredentialStore {
  private readonly credentialPath = './insecure-credentials.ini'

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