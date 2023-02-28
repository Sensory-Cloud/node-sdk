import test from 'ava';
import { Config } from './config';
import { Initializer } from './initializer';
import { mockOauthService } from './services/oauth.service.test';

test('Initializer initializes', async (t) => {
  const config = Config.initialize(
    `${__dirname}/../../examples/example-credentials.ini`
  );
  t.assert(config);

  const deviceInfo = await Initializer.initializeFromConfig(
    `${__dirname}/../../examples/example-credentials.ini`,
    new mockOauthService()
  );

  t.assert(deviceInfo);
});
