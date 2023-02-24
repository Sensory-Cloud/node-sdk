import test from 'ava';


import * as mock from 'ts-mockito';
import { Config } from '../config';
import { OauthServiceClient } from '../generated/oauth/oauth_grpc_pb';
import { DeviceServiceClient } from '../generated/v1/management/device_grpc_pb';
import { DeviceResponse } from '../generated/v1/management/device_pb';

import {
  IOauthService,
  ISecureCredentialStore,
  OauthClient,
  OauthService,
  OauthToken,
} from '../services/oauth.service';

export class mockCredentialStore implements ISecureCredentialStore {
  saveCredentials(clientId: string, clientSecret: string): void {
    return;
  }

  async getClientId(): Promise<string> {
    return 'doesnt-matter';
  }

  async getClientSecret(): Promise<string> {
    return 'doesnt-matter';
  }
}

export class mockOauthService implements IOauthService {
  getCredentialStore(): ISecureCredentialStore {
    return new mockCredentialStore();
  }

  generateCredentials(): OauthClient {
    return { clientId: 'doesnt', clientSecret: 'matter' };
  }

  async getToken(): Promise<OauthToken> {
    return { token: 'doesnt-matter', expires: new Date() };
  }

  async register(
    deviceName: string,
    credential: string
  ): Promise<DeviceResponse.AsObject> {
    return new DeviceResponse().toObject();
  }

  async renewDeviceCredential(
    credential: string
  ): Promise<DeviceResponse.AsObject> {
    return new DeviceResponse().toObject();
  }
}


test('OauthService should be created', (t) => {
  const oauthServiceClient = mock.mock(OauthServiceClient);
  const deviceServiceClient = mock.mock(DeviceServiceClient);
  const config = Config.initialize(`${__dirname}/../../../examples/example-credentials.ini`);

  const oauthService = new OauthService(
    new mockCredentialStore(),
    oauthServiceClient,
    deviceServiceClient,
  );
  t.assert(oauthService, 'an oauth service should be created');
});

test('OauthService.credentials should work correctly', (t) => {
  const oauthServiceClient = mock.mock(OauthServiceClient);
  const deviceServiceClient = mock.mock(DeviceServiceClient);
  const config = Config.initialize(`${__dirname}/../../../examples/example-credentials.ini`);

  const oauthService = new OauthService(
    new mockCredentialStore(),
    oauthServiceClient,
    deviceServiceClient,
  );
  t.assert(oauthService, 'an oauth service should be created');

  const credentials = oauthService.generateCredentials()
  t.assert(credentials, 'credentials should be created');
});

test('OauthService.getCallCredentials should work correctly', (t) => {
  const oauthServiceClient = mock.mock(OauthServiceClient);
  const deviceServiceClient = mock.mock(DeviceServiceClient);
  const config = Config.initialize(`${__dirname}/../../../examples/example-credentials.ini`);

  const oauthService = new OauthService(
    new mockCredentialStore(),
    oauthServiceClient,
    deviceServiceClient,
  );
  t.assert(oauthService, 'an oauth service should be created');

  const credentials = oauthService.getCallCredentials()
  t.assert(credentials, 'credentials should be created');
});

test('OauthService.getCredentialStore should work correctly', (t) => {
  const oauthServiceClient = mock.mock(OauthServiceClient);
  const deviceServiceClient = mock.mock(DeviceServiceClient);
  const config = Config.initialize(`${__dirname}/../../../examples/example-credentials.ini`);

  const oauthService = new OauthService(
    new mockCredentialStore(),
    oauthServiceClient,
    deviceServiceClient,
  );
  t.assert(oauthService, 'an oauth service should be created');

  const credentialStore = oauthService.getCredentialStore()
  t.assert(credentialStore, 'credentialStore should be created');
});
