let assert = require('assert');

let allocationModule = require('../../src/api/algorithm/space-allocation-algorithm');
let testFunctions = require('./test_functions');

describe('Space Allocation Algorithm - Black-box Testing', function() {
  describe('Allocate projects (4 of 1m*1m) into cluster (1 of 2m*2m)', function() {
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
      },
    ];
    it('projects should completely fit into the given cluster (0 degrees)', function() {
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
        },
        {
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
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (30 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 30,
          'level': 1
        },
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
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -0.5,
          'coordY': 0.866,
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.866,
          'coordY': 0.5,
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.366,
          'coordY': 1.366,
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (40 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 40,
          'level': 1
        },
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
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -0.643,
          'coordY': 0.766,
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.766,
          'coordY': 0.643,
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.123,
          'coordY': 1.409,
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (90 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 90,
          'level': 1
        },
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
          'angle': 90,
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
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -1,
          'coordY': 0,
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -1,
          'coordY': 1,
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-30 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -30,
          'level': 1
        },
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
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.5,
          'coordY': 0.866,
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.866,
          'coordY': -0.5,
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1.366,
          'coordY': 0.366,
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-45 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -45,
          'level': 1
        },
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
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.707,
          'coordY': 0.707,
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.707,
          'coordY': -0.707,
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1.414,
          'coordY': 0,
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-90 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -90,
          'level': 1
        },
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
          'angle': -90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': -1,
          'angle': -90,
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
          'angle': -90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': -1,
          'angle': -90,
          'group_theme': 'doc.data().theme',
          'allocation': 0
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (4 of 1m*1m & 1 of 2m*2m) into clusters (2 of 2m*2m)', function() {
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
    ];
    it('projects should completely fit into the given clusters (0 degrees)', function() {
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
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1
        },
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
          'allocation': 1
        },
      ]
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given clusters (30 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 30,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 30,
          'level': 1
        },
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
          'angle': 30,
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
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -0.5,
          'coordY': 0.866,
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.866,
          'coordY': 0.5,
          'angle': 30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given clusters (40 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 40,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 40,
          'level': 1
        },
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
          'angle': 40,
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
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -0.643,
          'coordY': 0.766,
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.766,
          'coordY': 0.643,
          'angle': 40,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (90 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 90,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': 90,
          'level': 1
        },
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
          'angle': 90,
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
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': -1,
          'coordY': 0,
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 1,
          'angle': 90,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-30 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -30,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -30,
          'level': 1
        },
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
          'angle': -30,
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
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.5,
          'coordY': 0.866,
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.866,
          'coordY': -0.5,
          'angle': -30,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-45 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -45,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -45,
          'level': 1
        },
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
          'angle': -45,
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
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.707,
          'coordY': 0.707,
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0.707,
          'coordY': -0.707,
          'angle': -45,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
    it('projects should completely fit into the given cluster (-90 degrees)', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -90,
          'level': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 2,
          'breadth': 2,
          'coordX': 0,
          'coordY': 0,
          'angle': -90,
          'level': 1
        },
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
          'angle': -90,
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
          'angle': -90,
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
          'angle': -90,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': -1,
          'angle': -90,
          'group_theme': 'doc.data().theme',
          'allocation': 1
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (2 of 1m*1m) with different serial_no into clusters (1 of 2m*1m)', function() {
    it('any possible combination of allocation (with serial_no) should be accepted', function() {
      let inputClusters = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 2,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle': 0,
          'level': 1,
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
          'allocation': -1,
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
          'allocation': -1,
        },
      ];
      allocationModule.allocateSpace(inputClusters, inputProjects);
      let outputProjects1 = [
        {
          'id': 'doc.id',
          'serial_no': 0,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0,
        },
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 1,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0,
        },
      ];
      let outputProjects2 = [
        {
          'id': 'doc.id',
          'serial_no': 1,
          'length': 1,
          'breadth': 1,
          'coordX': 0,
          'coordY': 0,
          'angle':0,
          'group_theme': 'doc.data().theme',
          'allocation': 0,
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
          'allocation': 0,
        }
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects1) || testFunctions.isPermutation(inputProjects, outputProjects2), true);
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
        },
        {
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
        },
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
  });
  describe('Allocate projects (4 of 1m*1m & 1 of 1m*2m) into clusters (1 of 1m*2m & 1 of 2m*1m); large projects should be prioritised', function() {
    it('partial allocation should be generated - allocated: 1m*2m, 2 of 1m*1m; unallocated: 2 of 1m*1m', function() {
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
          'allocation': 0
        }
      ];
      assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    });
  });
});
