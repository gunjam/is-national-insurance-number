'use strict';

module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
};
