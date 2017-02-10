'use strict';

const isNationalInsuranceNumber =
  /^(?!BG|GB|NK|KN|TN|NT|ZZ)[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D]{1}$/;

module.exports = function (input) {
  if (typeof input === 'string' && input.length === 9) {
    return isNationalInsuranceNumber.test(input);
  }
  return false;
};
