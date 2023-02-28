import test from 'ava';
import { Config } from './config';

test('Config loads .env file', (t) => {
  const config = Config.initialize(
    `${__dirname}/../../examples/example-credentials.ini`
  );
  t.assert(config);
});
