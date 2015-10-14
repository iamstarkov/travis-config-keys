import { equal } from 'assert';
import travisConfigProps from './index';

it('should travisConfigProps', () =>
  equal(travisConfigProps.length, 13));
