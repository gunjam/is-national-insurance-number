'use strict';

const assert = require('assert');
const sanitiseNino = require('../sanitise-nino');

describe('sanitiseNino()', () => {
  it('should invalid characters from national insurance number', () => {
    const output = sanitiseNino('JJ 11 22 33 A!@£$%^&*()-=_+[]{}\';/,?><|:"`~');
    assert.strictEqual(output, 'JJ112233A');
  });

  it('should convert national insurance number to uppercase', () => {
    const output = sanitiseNino('jj112233a');
    assert.strictEqual(output, 'JJ112233A');
  });
});
