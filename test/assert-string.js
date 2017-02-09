const assert = require('assert');
const assertString = require('../assert-string');

describe('assertString()', () => {
  it('should throw an error if input is not a string', () => {
    assert.throws(() => assertString(true), Error, 'didn\'t throw an error when boolean');
    assert.throws(() => assertString(null), Error, 'didn\'t throw an error when null');
    assert.throws(() => assertString(undefined), Error, 'didn\'t throw an error when undefined');
    assert.throws(() => assertString(1), Error, 'didn\'t throw an error when number');
    assert.throws(() => assertString({}), Error, 'didn\'t throw an error when object');
  });

  it('should not throw an error if input is a string', () => {
    assert.doesNotThrow(() => assertString('String'), Error, 'threw an error when string');
  });
});
