'use strict';

const invalidCharacters = /[^A-Z0-9]+/g;

module.exports = function (input) {
  return String(input).toUpperCase().replace(invalidCharacters, '');
};
