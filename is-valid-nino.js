'use strict';

const assertString = require('./assert-string');

const isNationalInsuranceNumber = /^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D]{1}$/;

module.exports = function (input) {
  assertString(input);
  return isNationalInsuranceNumber.test(input);
};
