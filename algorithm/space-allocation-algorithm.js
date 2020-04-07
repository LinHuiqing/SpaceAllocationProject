class Space {
  constructor (dimensions, angle, index) {
    this.length = dimensions[0];
    this.breadth = dimensions[1];
    // if (dimensions[0] >= dimensions[1]) {
    //   this.length = dimensions[0];
    //   this.breadth = dimensions[1];
    // } else {
    //   this.length = dimensions[1];
    //   this.breadth = dimensions[0];
    // }
    this.angle = angle;
    this.index = index;
    this.startX = this.startY = 0;
  }
  setStartCoords(startCoords) {
    this.startX = startCoords[0];
    this.startY = startCoords[1];
    // this.startCoords = startCoords;
  }
}

class Project extends Space {
  constructor(dimensions, angle, index) {
    super(dimensions, angle, index);

    this.spaceAllocation = -1;
    // TODO: add properties of project (eg name, description all that)
  }
  setAllocation (allocatedCluster) {
    this.spaceAllocation = allocatedCluster;
  }
}

class SpaceList {
  constructor (rawArray, listType) {
    var cluster = [];
    for (var element of rawArray) {
      const dimensions = [element[0], element[1]];
      // console.log(dimensions);
      if (listType == "space") {
        var space = new Space(dimensions, element[2], cluster.length, [0,0]);
      } else if (listType == "project") {
        var space = new Project(dimensions, element[2], cluster.length, [0,0]);
      }
      cluster.push(space);
    }
    this.cluster = cluster;
    // this.lastIndex = this.cluster.length-1;
    // console.log(this.cluster);
  }
  _increasingBreadthSorter(space1, space2) {
    if (space1.breadth == space2.breadth) {
      return 0;
    } else {
      return space1.breadth < space2.breadth ? -1:1;
    }
  }
  _decreasingBreadthSorter(space1, space2) {
    if (space1.breadth == space2.breadth) {
      return 0;
    } else {
      return space1.breadth > space2.breadth ? -1:1;
    }
  }
  sortByBreadth(key) {
    if (key=="decreasing") {
      this.cluster.sort(this._decreasingBreadthSorter);
    } else {
      this.cluster.sort(this._increasingBreadthSorter);
    }
  }
  _indexSorter(space1, space2) {
    if (space1.index == space2.index) {
      return 0;
    } else {
      return space1.index < space2.index ? -1:1;
    }
  }
  sortByIndex() {
    this.cluster.sort(this._indexSorter);
  }
  getCluster () {
    // console.log(this.cluster);
    return this.cluster;
  }
  setCluster (clusterList) {
    this.cluster = clusterList;
  }
  pushSpace (space) {
    this.cluster.push(space);
  }
  removeSpace (space) {
    this.cluster.remove(space); // TODO: CHECK SYNTAX!!
  }
}

var inputSpaces = [[10,3,0], [8,6,0], [5,5,0], [9,5,0], [12,6,-45], [12,6,0], [20,7,0], [13,5,0], [10,5,0], [5,5,0], [14,4,225], [28,3,0], [28,5,210], [28,4,-30]];
var inputProjects = [[10,2,0], [11, 3, 0]];
/** testCases:
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

var spaceList = new SpaceList(inputSpaces, "space");
var projectsList = new SpaceList(inputProjects, "project");
// console.log(spaceList);
// console.log(projectsList);

function allocateSpace(spaceList, projectsList) {
  projectsList.sortByBreadth("decreasing");
  spaceList.sortByBreadth();
  // console.log(spaceList);
  // let spacesCount = spaceList.getCluster().length;

  for (var project of projectsList.getCluster()) {
    // console.log(project);
    for (var space of spaceList.getCluster()) {
      // console.log(space);
      if (project.length > space.length || project.breadth > space.breadth) {
        // console.log("NOOOO");
        continue;
      }

      // console.log("slot found!!");
      project.setAllocation(space.index);
      project.startX = space.startX;
      project.startY = space.startY;
      project.angle = space.angle;

      if (project.length == space.length && project == space.breadth) {
        // spaceList.sortByIndex();
        let removeIndex = spaceList.indexOf(space);
        spaceList.splice(removeIndex, 1);
        // spaceList.remove(space);
      } else if (project.length == space.length) {
        space.breadth -= project.breadth;
        space.startY += project.breadth;
      } else if (project.breadth == space.breadth) {
        space.length -= project.length;
        space.startX += project.length;
      } else {
        // spaceList.lastIndex ++;
        var newSpace = new Space([project.length, space.breadth-project.breadth], space.angle, space.index);
        newSpace.setStartCoords([space.startX, space.startY+project.breadth]);
        // console.log("HI");
        // console.log(newSpace);
        spaceList.pushSpace(newSpace);
        space.length -= project.length;
        space.startX += project.length;
        // console.log(space);
      }
      spaceList.sortByBreadth();
      break;
    }
  }

}
console.log(spaceList);
allocateSpace(spaceList, projectsList);
spaceList.sortByIndex();
projectsList.sortByIndex();
console.log(spaceList);
console.log(projectsList);
