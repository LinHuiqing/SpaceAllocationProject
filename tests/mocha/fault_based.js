let expect = require('chai').expect;
let assert = require('assert');

let allocationModule = require('../../src/api/algorithm/space-allocation-algorithm');
let testFunctions = require('./test_functions');

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
        },
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
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), false);
    });
  });
  describe('Allocate projects (4 of 1m*1m) into cluster (1 of 2m*2m); serial_nos of the projects should remain the same', function() {
    it('after allocation, serial_nos of the projects should remain the same', function() {
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
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), false);
    });
  });
  describe('Allocated projects must all be to existing clusters', function() {
    it('projects must be allocated to existing clusters', function() {
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
      let valid_allocation = [-1];
      for (let cluster in inputClusters) {
        if (!valid_allocation.includes(cluster.serial_no)) {
          valid_allocation.push(cluster.serial_no);
        }
      }
      let valid = true;
      for (let project in inputProjects) {
        if (!valid_allocation.includes(project.allocation)) {
          valid = false;
          break;
        }
      }
      assert.equal(valid, true);
    });
  });
  describe("No allocation if allocation is not possible", function() {
    it('projects list should remain empty if both clusters and projects lists are empty', function() {
      let inputProjects = [];
      allocationModule.allocateSpace([], inputProjects);
      assert.equal(testFunctions.isPermutation(inputProjects, []), true);
    });
    it('projects list should remain empty if clusters list is empty', function() {
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
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
      ];
      let outputProjects = JSON.parse(JSON.stringify(inputProjects));
      allocationModule.allocateSpace([], inputProjects);
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects list should remain empty if projects list is empty', function() {
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
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        },
      ];
      let inputProjects = [];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      assert.equal(testFunctions.isPermutation(inputProjects, []), true);
    });
    it('projects list should remain the same if projects are bigger than clusters in clusters list', function() {
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
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        },
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
          'length': 3,
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
          'breadth': 3,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 3,
          'breadth': 3,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': -1
        },
      ];
      let outputProjects = JSON.parse(JSON.stringify(inputProjects));
      allocationModule.allocateSpace(inputClusters, inputProjects);
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Error should be thrown on invalid input', function () {
    it('error should be thrown if any of the inputs are null', function() {
      expect(function() {
        allocationModule.allocateSpace([], null);
      }).to.throw(TypeError);
      expect(function() {
        allocationModule.allocateSpace(null, []);
      }).to.throw(TypeError);
      expect(function() {
        allocationModule.allocateSpace(null, null);
      }).to.throw(TypeError);
    });
    it('error should be thrown on string input', function() {
      expect(function() {
        allocationModule.allocateSpace("", "dsufhnkj");
      }).to.throw(TypeError);
      expect(function() {
        allocationModule.allocateSpace("dsufhnkj", []);
      }).to.throw(TypeError);
    });
  });
});
