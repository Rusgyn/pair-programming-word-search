const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    let result = wordSearch([
      ['R', 'A', 'D', 'L', 'Q', 'R', 'A', 'D'],
      ['U', 'N', 'A', 'I', 'F', 'U', 'N', 'A'],
      ['S', 'D', 'N', 'G', 'Q', 'S', 'D', 'N'],
      ['G', 'X', 'I', 'H', 'E', 'G', 'X', 'I'],
      ['Y', 'X', 'Y', 'T', 'Y', 'Y', 'X', 'Y', 'N', 'G', 'Q'],
      ['N', 'X', 'A', 'H', 'N', 'N', 'X', 'A'],
      ['X', 'X', 'R', 'O', 'A', 'X', 'X', 'R'],
      ['X', 'X', 'X', 'U', 'K', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'S', 'Q', 'X', 'X', 'X','R', 'O', 'A'],
    ], 'LIGHT')

    assert.isTrue(result);
  });

});
