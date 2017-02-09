'use strict';

const assert = require('assert');
const isValidNino = require('../is-valid-nino');

describe('isValidNino()', () => {
  it('should return true if valid format (2 chars, 6 numbers, 1 char)', () => {
    const output = isValidNino('JJ123123D');
    assert(output, 'wasn\'t true when nino was valid');
  });

  it('should return false if not valid format', () => {
    const output1 = isValidNino('JJ12312D');
    const output2 = isValidNino('JJ123123');
    const output3 = isValidNino('J123123D');
    const output4 = isValidNino('123JJD123');
    const output5 = isValidNino('D123123JJ');

    assert(!output1, 'wasn\'t false when nino was JJ12312D');
    assert(!output2, 'wasn\'t false when nino was JJ123123');
    assert(!output3, 'wasn\'t false when nino was J123123D');
    assert(!output4, 'wasn\'t false when nino was 123JJD123');
    assert(!output5, 'wasn\'t false when nino was D123123JJ');
  });

  it('should return false if contains spaces', () => {
    const output1 = isValidNino('JJ 11 22 33 D');
    const output2 = isValidNino(' JJ123123D ');

    assert(!output1, 'wasn\'t false when was JJ 11 22 33 D');
    assert(!output2, 'wasn\'t false when was " JJ123123D "');
  });

  it('should return true if the first char is in the set [A-CEGHJ-PR-TW-Z]', () => {
    const output1 = isValidNino('AA123123D');
    const output2 = isValidNino('BA123123D');
    const output3 = isValidNino('CA123123D');
    const output4 = isValidNino('EA123123D');
    const output5 = isValidNino('GA123123D');
    const output6 = isValidNino('HA123123D');
    const output7 = isValidNino('JA123123D');
    const output8 = isValidNino('KA123123D');
    const output9 = isValidNino('LA123123D');
    const output10 = isValidNino('MA123123D');
    const output11 = isValidNino('NA123123D');
    const output12 = isValidNino('OA123123D');
    const output13 = isValidNino('PA123123D');
    const output14 = isValidNino('RA123123D');
    const output15 = isValidNino('SA123123D');
    const output16 = isValidNino('TA123123D');
    const output17 = isValidNino('WA123123D');
    const output18 = isValidNino('XA123123D');
    const output19 = isValidNino('YA123123D');
    const output20 = isValidNino('ZA123123D');

    assert(output1, 'wasn\'t true when first char was A');
    assert(output2, 'wasn\'t true when first char was B');
    assert(output3, 'wasn\'t true when first char was C');
    assert(output4, 'wasn\'t true when first char was E');
    assert(output5, 'wasn\'t true when first char was G');
    assert(output6, 'wasn\'t true when first char was H');
    assert(output7, 'wasn\'t true when first char was J');
    assert(output8, 'wasn\'t true when first char was K');
    assert(output9, 'wasn\'t true when first char was L');
    assert(output10, 'wasn\'t true when first char was M');
    assert(output11, 'wasn\'t true when first char was N');
    assert(output12, 'wasn\'t true when first char was O');
    assert(output13, 'wasn\'t true when first char was P');
    assert(output14, 'wasn\'t true when first char was R');
    assert(output15, 'wasn\'t true when first char was S');
    assert(output16, 'wasn\'t true when first char was T');
    assert(output17, 'wasn\'t true when first char was W');
    assert(output18, 'wasn\'t true when first char was X');
    assert(output19, 'wasn\'t true when first char was Y');
    assert(output20, 'wasn\'t true when first char was Z]');
  });

  it('should return false if the first char is not in the set [A-CEGHJ-PR-TW-Z]', () => {
    const output1 = isValidNino('DA123123D');
    const output2 = isValidNino('FA123123D');
    const output3 = isValidNino('IA123123D');
    const output4 = isValidNino('QA123123D');
    const output5 = isValidNino('UA123123D');
    const output6 = isValidNino('VA123123D');

    assert(!output1, 'wasn\'t false when first char was D');
    assert(!output2, 'wasn\'t false when first char was F');
    assert(!output3, 'wasn\'t false when first char was I');
    assert(!output4, 'wasn\'t false when first char was Q');
    assert(!output5, 'wasn\'t false when first char was U');
    assert(!output6, 'wasn\'t false when first char was V');
  });

  it('should return true if the second char is in the set [A-CEGHJ-NPR-TW-Z]', () => {
    const output1 = isValidNino('AA123123D');
    const output2 = isValidNino('AB123123D');
    const output3 = isValidNino('AC123123D');
    const output4 = isValidNino('AE123123D');
    const output5 = isValidNino('AG123123D');
    const output6 = isValidNino('AH123123D');
    const output7 = isValidNino('AJ123123D');
    const output8 = isValidNino('AK123123D');
    const output9 = isValidNino('AL123123D');
    const output10 = isValidNino('AM123123D');
    const output11 = isValidNino('AN123123D');
    const output12 = isValidNino('AP123123D');
    const output13 = isValidNino('AR123123D');
    const output14 = isValidNino('AS123123D');
    const output15 = isValidNino('AT123123D');
    const output16 = isValidNino('AW123123D');
    const output17 = isValidNino('AX123123D');
    const output18 = isValidNino('AY123123D');
    const output19 = isValidNino('AZ123123D');

    assert(output1, 'wasn\'t true when second char was A');
    assert(output2, 'wasn\'t true when second char was B');
    assert(output3, 'wasn\'t true when second char was C');
    assert(output4, 'wasn\'t true when second char was E');
    assert(output5, 'wasn\'t true when second char was G');
    assert(output6, 'wasn\'t true when second char was H');
    assert(output7, 'wasn\'t true when second char was J');
    assert(output8, 'wasn\'t true when second char was K');
    assert(output9, 'wasn\'t true when second char was L');
    assert(output10, 'wasn\'t true when second char was M');
    assert(output11, 'wasn\'t true when second char was N');
    assert(output12, 'wasn\'t true when second char was P');
    assert(output13, 'wasn\'t true when second char was R');
    assert(output14, 'wasn\'t true when second char was S');
    assert(output15, 'wasn\'t true when second char was T');
    assert(output16, 'wasn\'t true when second char was W');
    assert(output17, 'wasn\'t true when second char was X');
    assert(output18, 'wasn\'t true when second char was Y');
    assert(output19, 'wasn\'t true when second char was Z');
  });

  it('should return false if the second char is not in the set [A-CEGHJ-NPR-TW-Z]', () => {
    const output1 = isValidNino('AD123123D');
    const output2 = isValidNino('AF123123D');
    const output3 = isValidNino('AI123123D');
    const output4 = isValidNino('AO123123D');
    const output5 = isValidNino('AQ123123D');
    const output6 = isValidNino('AU123123D');
    const output7 = isValidNino('AV123123D');

    assert(!output1, 'wasn\'t false when second char was D');
    assert(!output2, 'wasn\'t false when second char was F');
    assert(!output3, 'wasn\'t false when second char was I');
    assert(!output4, 'wasn\'t false when second char was O');
    assert(!output5, 'wasn\'t false when second char was Q');
    assert(!output6, 'wasn\'t false when second char was U');
    assert(!output7, 'wasn\'t false when second char was V');
  });

  it('should return true if final char is A, B, C or D', () => {
    const output1 = isValidNino('JJ123123A');
    const output2 = isValidNino('JJ123123B');
    const output3 = isValidNino('JJ123123C');
    const output4 = isValidNino('JJ123123D');

    assert(output1, 'wasn\'t true when final char was A');
    assert(output2, 'wasn\'t true when final char was B');
    assert(output3, 'wasn\'t true when final char was C');
    assert(output4, 'wasn\'t true when final char was D');
  });

  it('should return false if it starts with BG, GB, NK, KN, TN, NT or ZZ', () => {
    const output1 = isValidNino('BG123123D');
    const output2 = isValidNino('GB123123D');
    const output3 = isValidNino('NK123123D');
    const output4 = isValidNino('KN123123D');
    const output5 = isValidNino('TN123123D');
    const output6 = isValidNino('NT123123D');
    const output7 = isValidNino('ZZ123123D');

    assert(!output1, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output2, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output3, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output4, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output5, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output6, 'wasn\'t false when starting with invalid 2 chars');
    assert(!output7, 'wasn\'t false when starting with invalid 2 chars');
  });

  it('should return false if final char is in the range [E-Z]', () => {
    const output1 = isValidNino('JJ123123E');
    const output2 = isValidNino('JJ123123F');
    const output3 = isValidNino('JJ123123G');
    const output4 = isValidNino('JJ123123H');
    const output5 = isValidNino('JJ123123I');
    const output6 = isValidNino('JJ123123J');
    const output7 = isValidNino('JJ123123K');
    const output8 = isValidNino('JJ123123L');
    const output9 = isValidNino('JJ123123M');
    const output10 = isValidNino('JJ123123N');
    const output11 = isValidNino('JJ123123O');
    const output12 = isValidNino('JJ123123P');
    const output13 = isValidNino('JJ123123Q');
    const output14 = isValidNino('JJ123123R');
    const output15 = isValidNino('JJ123123S');
    const output16 = isValidNino('JJ123123T');
    const output17 = isValidNino('JJ123123U');
    const output18 = isValidNino('JJ123123V');
    const output19 = isValidNino('JJ123123W');
    const output20 = isValidNino('JJ123123X');
    const output21 = isValidNino('JJ123123Y');
    const output22 = isValidNino('JJ123123Z');

    assert(!output1, 'wasn\'t false when final char was E');
    assert(!output2, 'wasn\'t false when final char was F');
    assert(!output3, 'wasn\'t false when final char was G');
    assert(!output4, 'wasn\'t false when final char was H');
    assert(!output5, 'wasn\'t false when final char was I');
    assert(!output6, 'wasn\'t false when final char was J');
    assert(!output7, 'wasn\'t false when final char was K');
    assert(!output8, 'wasn\'t false when final char was L');
    assert(!output9, 'wasn\'t false when final char was M');
    assert(!output10, 'wasn\'t false when final char was N');
    assert(!output11, 'wasn\'t false when final char was O');
    assert(!output12, 'wasn\'t false when final char was P');
    assert(!output13, 'wasn\'t false when final char was Q');
    assert(!output14, 'wasn\'t false when final char was R');
    assert(!output15, 'wasn\'t false when final char was S');
    assert(!output16, 'wasn\'t false when final char was T');
    assert(!output17, 'wasn\'t false when final char was U');
    assert(!output18, 'wasn\'t false when final char was V');
    assert(!output19, 'wasn\'t false when final char was W');
    assert(!output20, 'wasn\'t false when final char was X');
    assert(!output21, 'wasn\'t false when final char was Y');
    assert(!output22, 'wasn\'t false when final char was Z');
  });

  it('should return false if valid characters are lower case', () => {
    const output = isValidNino('jj123123d');
    assert(!output, 'wasn\'t false when characters were lower case');
  });

  it('should return true if 6 middle chars are digits from 0-9', () => {
    const output1 = isValidNino('JJ000000A');
    const output2 = isValidNino('JJ111111A');
    const output3 = isValidNino('JJ222222A');
    const output4 = isValidNino('JJ333333A');
    const output5 = isValidNino('JJ444444A');
    const output6 = isValidNino('JJ555555A');
    const output7 = isValidNino('JJ666666A');
    const output8 = isValidNino('JJ777777A');
    const output9 = isValidNino('JJ888888A');
    const output10 = isValidNino('JJ999999A');

    assert(output1, 'wasn\'t true when digits contained 0s');
    assert(output2, 'wasn\'t true when digits contained 1s');
    assert(output3, 'wasn\'t true when digits contained 2s');
    assert(output4, 'wasn\'t true when digits contained 3s');
    assert(output5, 'wasn\'t true when digits contained 4s');
    assert(output6, 'wasn\'t true when digits contained 5s');
    assert(output7, 'wasn\'t true when digits contained 6s');
    assert(output8, 'wasn\'t true when digits contained 7s');
    assert(output9, 'wasn\'t true when digits contained 8s');
    assert(output10, 'wasn\'t true when digits contained 9s');
  });
});
