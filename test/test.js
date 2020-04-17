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

var assert = require('assert');

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

/* testCases:
  1) Complete fit:
    var inputSpaces = [[2,2,0]];
    var inputProjects = [[1,1,0], [1,1,0], [1,1,0], [1,1,0]
  2) Partial fit (all same size):
    var inputSpaces = [[2,2,0]];
    var inputProjects = [[1,1,0], [1,1,0], [1,1,0], [1,1,0], [1,1,0]]
  3) Partial fit (prioritising large projects):
    var inputSpaces = [[1,2,0], [2,1,0]];
    var inputProjects = [[1,1,0], [1,1,0], [1,1,0], [1,1,0], [1,2,0]]
*/

var allocationModule = require('../src/api/algorithm/space-allocation-algorithm');

describe('Space Allocation Algorithm - Black-box Testing', function() {
  describe('Allocate projects (4 of 1m*1m) into cluster (1 of 2m*2m)', function() {
    it('projects should completely fit into the given cluster', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (4 of 1m*1m & 1 of 2m*2m) into clusters (2 of 2m*2m)', function() {
    it('projects should completely fit into the given clusters', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }, {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        }
      ]
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('groups in same cluster can be rearranged', function() {
    it('1 cluster', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 3,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 3,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ]
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (5 of 1m*1m) into clusters (1 of 2m*2m)', function() {
    it('partial allocation should be generated - 4 projects allocated cluster while 1 project remains unallocated', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (4 of 1m*1m & 1 of 1m*2m) into clusters (1 of 1m*2m & 1 of 2m*1m); large projects should be prioritised', function() {
    it('partial allocation should be generated - allocated: 1m*2m, 2 of 1m*1m; unallocated: 2 of 1m*1m', function() {
      // var inputSpaces = [[1,2,0], [2,1,0]];
      // var inputProjects = [[1,1,0], [1,1,0], [1,1,0], [1,1,0], [1,2,0]]
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }, {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
});

describe('Space Allocation Algorithm - Fault-based Testing', function() {
  describe('Allocate projects (3 of 1m*1m) into cluster (1 of 2m*2m)', function() {
    it('all projects should be allocated with some space left', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), false);
    });
  });
  describe('Allocate projects (3 of 1m*1m) into cluster (1 of 2m*2m) input groups does not equal output groups', function() {
    it('1 cluster', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 3,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 4,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), false);
    });
  });
  describe('allocated to non-existent cluster', function() {
    it('1 cluster', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), false);
    });
  });
  describe('if extra space, can anyhow', function() {
    it('1 cluster', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        }
      ];
      let inputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 3,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        }
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 2,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }, {
          'id': 'doc.id',
          'serial_no': 3,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 1,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        }
      ];
      assert.equal(isPermutation(inputProjects, outputProjects), true);
    });
  });
});
