import { Initializer, ISecureCredentialStore, ManagementService, OauthService, TokenManager } from 'sensory-cloud';
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

  // Create management service to make calls to SensoryCloud management endpoints
  const managementService = new ManagementService(tokenManger);

  // Get all enrollments for a given UserId
  const userId = 'something-given-to-users-when-they-enroll'
  const userEnrollments = await managementService.getEnrollments(userId)
  console.log(userEnrollments);

  // Get a single enrollment from this user
  const enrollment = userEnrollments.enrollmentsList[0];

  // Group together multiple enrollments for multi-user authentication.
  // Enrollments can be across multiple users.
  // Enrollment groups are pinned to a particular user, acting as the group owner.
  const group = await managementService.createEnrollmentGroup(
    userId, 'your-group-id', 'your-group-name', 'a good description', enrollment.modelname, [enrollment.id, '76317a48-17cc-4ea0-9fde-04b3f5177e3e']);
  console.log(group);

  // Get all groups in the system
  const groups = await managementService.getEnrollmentGroups(userId);
  console.log(groups);

  // Add an enrollment to this enrollment group
  await managementService.appendEnrollmentGroup(group.id, ['even-more-enrollment-ids', '0a20dcc0-7e65-490c-86a9-5cacd0936d06'])

  // Delete an enrollment
  await managementService.deleteEnrollment(enrollment.id)

  // Delete an enrollment group
  await managementService.deleteEnrollmentGroup(group.id)
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