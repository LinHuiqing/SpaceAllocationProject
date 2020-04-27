function isPermutation(arr1, arr2) {
  // console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let element1 of arr1) {
      // console.log("testing", arr2);
      let index = 0;
      for (let element2 of arr2) {
        // console.log("index", index);
        if (JSON.stringify(element1) == JSON.stringify(element2)) {
          // console.log(element1, element2);
          arr2.splice(index, 1);
          break;
        } else {
          index++;
        }
      }
    }
    if (arr2.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let assert = require('assert');

describe('Test Functions', function() {
  describe('#isPermutation()', function() {
    it('should return true when lists are permutations', function() {
      assert.equal(isPermutation([1,2,3], [2,1,3]), true);
    });
    it('should return false when lists are of different length', function() {
      assert.equal(isPermutation([1,2,3,2], [2,1,3]), false);
    });
    it('should return false when lists are of same length but not permutations', function() {
      assert.equal(isPermutation([1,2,4], [2,1,3]), false);
    });
  });
});

module.exports = { isPermutation };
