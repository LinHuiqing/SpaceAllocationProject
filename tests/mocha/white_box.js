let expect = require('chai').expect;
let assert = require('assert');

let allocationModule = require('../../src/api/algorithm/space-allocation-algorithm');
let testFunctions = require('./test_functions');

describe('Space Allocation Algorithm - White-box Testing (Branch Coverage)', function() {
  it('Branch 0 - when size of cluster is the same as the size of the project', function() {
    expect(function() {
      allocationModule.allocateSpace(null, null);
    }).to.throw(TypeError, "Invalid input to allocateSpace() function.");
  });
  it('Branch 1 - when project is bigger than cluster in either length or breadth', function() {
    /* project.length > cluster.length */
    let inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
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
        'length': 3,
        'breadth': 2,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': -1,
      },
    ];
    let outputProjects = JSON.parse(JSON.stringify(inputProjects));
    allocationModule.allocateSpace(inputClusters, inputProjects);
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
    /* project.breadth > cluster.breadth */
    inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
        'coordX': 0,
        'coordY': 0,
        'angle': 0,
        'level': 1,
      },
    ];
    inputProjects = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 3,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': -1,
      },
    ];
    outputProjects = JSON.parse(JSON.stringify(inputProjects));
    allocationModule.allocateSpace(inputClusters, inputProjects);
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
  });
  it('Branch 2 - when size of cluster is the same as the size of the project', function() {
    let inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
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
        'length': 2,
        'breadth': 2,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': -1,
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
        'allocation': 0,
      },
    ];
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
  });
  it('Branch 3 - when project breadth is smaller than cluster breadth and project length is the same as cluster length', function() {
    let inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
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
        'length': 2,
        'breadth': 1,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': -1,
      },
    ];
    allocationModule.allocateSpace(inputClusters, inputProjects);
    let outputProjects = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 1,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': 0,
      },
    ];
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
  });
  it('Branch 4 - when project length is smaller than cluster length and project breadth is the same as cluster breadth', function() {
    let inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
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
        'breadth': 2,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': -1,
      },
    ];
    allocationModule.allocateSpace(inputClusters, inputProjects);
    let outputProjects = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 1,
        'breadth': 2,
        'coordX': 0,
        'coordY': 0,
        'angle':0,
        'group_theme': 'doc.data().theme',
        'allocation': 0,
      },
    ];
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
  });
  it('Branch 5 - when project length and breadth are smaller than cluster length and breadth respectively', function() {
    let inputClusters = [
      {
        'id': 'doc.id',
        'serial_no': 0,
        'length': 2,
        'breadth': 2,
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
        'allocation': 0,
      },
    ];
    assert.equal(testFunctions.isPermutation(inputProjects, outputProjects), true);
  });
});
