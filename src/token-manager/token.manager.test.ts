import test from 'ava';
import { Config, SDKInitConfig } from '../config';
import { mockOauthService } from '../services/oauth.service.test';
import { TokenManager } from './token.manager';

test('TokenManager should be created', (t) => {
  const tokenManager = new TokenManager(new mockOauthService());
  t.assert(tokenManager, 'a token manager should be created');
});

test('TokenManager should return authorization metadata', async (t) => {
  const tokenManager = new TokenManager(new mockOauthService());
  const metadata = await tokenManager.getAuthorizationMetadata();
  t.assert(metadata, 'metadata should be returned');
});

test('TokenManager should return credentials', async (t) => {
  const tokenManager = new TokenManager(new mockOauthService());
  Config.initializeWithConfig({ isSecure: true } as SDKInitConfig);
  const credentials = tokenManager.getCallCredentials();
  t.assert(credentials, 'credentials should be returned');
});

test('TokenManager should return token', async (t) => {
  const tokenManager = new TokenManager(new mockOauthService());
  const token = await tokenManager.getToken();
  t.assert(token, 'a token should be returned');
});
