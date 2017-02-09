const assert = require('assert');
const assertString = require('../assert-string');

describe('assertString()', () => {
  it('should throw an error if input is a boolean', () => {
    assert.throws(() => assertString(true), Error, 'didn\'t throw an error when boolean');
  });

  it('should throw an error if input is null', () => {
    assert.throws(() => assertString(null), Error, 'didn\'t throw an error when null');
  });

  it('should throw an error if input is undefined', () => {
    assert.throws(() => assertString(undefined), Error, 'didn\'t throw an error when undefined');
  });

  it('should throw an error if input is a number', () => {
    assert.throws(() => assertString(1), Error, 'didn\'t throw an error when number');
  });

  it('should throw an error if input is an object', () => {
    assert.throws(() => assertString({}), Error, 'didn\'t throw an error when object');
  });

  it('should not throw an error if input is a string', () => {
    assert.doesNotThrow(() => assertString('String'), Error, 'threw an error when string');
  });
});
