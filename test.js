import { equal } from 'assert';
import travisConfigProps from './index';

it('should travisConfigProps', () =>
  equal(travisConfigProps('unicorns'), 'unicorns'));

it('should travisConfigProps invalid input', () =>
  equal(travisConfigProps(), undefined));
