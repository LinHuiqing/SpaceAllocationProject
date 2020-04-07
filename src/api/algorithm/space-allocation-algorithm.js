function increasingBreadthSorter(space1, space2) {
  if (space1.breadth == space2.breadth) {
    return 0;
  } else {
    return space1.breadth < space2.breadth ? -1:1;
  }
}
function decreasingBreadthSorter(space1, space2) {
  if (space1.breadth == space2.breadth) {
    return 0;
  } else {
    return space1.breadth > space2.breadth ? -1:1;
  }
}

// var inputSpaces = [[10,3,0], [8,6,0], [5,5,0], [9,5,0], [12,6,-45], [12,6,0], [20,7,0], [13,5,0], [10,5,0], [5,5,0], [14,4,225], [28,3,0], [28,5,210], [28,4,-30]];
// var inputProjects = [[10,2,0], [11, 3, 0]];
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

function allocateSpace(rawSpaceList, projectsList) {
  // projectsList.sortByBreadth("decreasing");
  projectsList.sort(decreasingBreadthSorter);
  // console.log(rawSpaceList);
  // let spaceList = new SpaceList([]);
  // spaceList.setCluster(JSON.parse(JSON.stringify(rawSpaceList)));
  let spaceList = JSON.parse(JSON.stringify(rawSpaceList));
  // console.log(spaceList);
  spaceList.sort(increasingBreadthSorter);
  // console.log(spaceList);
  // let spacesCount = spaceList.getCluster().length;

  for (let project of projectsList) {
    // console.log(project);
    for (let space of spaceList) {
      // console.log(space);
      if (project.length > space.length || project.breadth > space.breadth) {
        continue;
      }

      // console.log("slot found!!");
      project.allocation = space.serial_no;
      project.coordX = space.coordX;
      project.coordY = space.coordY;
      // project.coordX = (space.coordX - space.length/2) + project.length/2;
      // project.coordY = (space.coordY - space.breadth/2) + project.breadth/2;
      project.angle = space.angle;

      if (project.length == space.length && project == space.breadth) {
        // spaceList.sortByIndex();
        let removeIndex = spaceList.indexOf(space);
        spaceList.splice(removeIndex, 1);
        // spaceList.remove(space);
      } else if (project.length == space.length) {
        space.breadth -= project.breadth;
        // space.coordY += project.breadth;
        space.coordY += project.breadth * Math.cos((project.angle*Math.PI)/180);
        space.coordX += project.breadth * Math.sin((project.angle*Math.PI)/180);
        // console.log("cut breadth", space.coordX, space.coordY);
      } else if (project.breadth == space.breadth) {
        space.length -= project.length;
        // space.coordX += project.length;
        space.coordY += project.length * Math.sin((project.angle*Math.PI)/180);
        space.coordX += project.length * Math.cos((project.angle*Math.PI)/180);
        // console.log("cut length", space.coordX, space.coordY);
      } else {
        // spaceList.lastIndex ++;
        // console.log(space);
        // let projectObject = project.getObject();
        // let clusterObject = space.getObject();
        // let newSpace = new Cluster(clusterObject);
        let newSpace = JSON.parse(JSON.stringify(space));
        newSpace.length = project.length
        newSpace.breadth = space.breadth - project.breadth
        // newSpace.coordY = space.coordY + project.breadth
        newSpace.coordY = space.coordY + project.breadth * Math.cos((project.angle*Math.PI)/180);
        newSpace.coordX = space.coordX + project.breadth * Math.sin((project.angle*Math.PI)/180);

        // newSpace.setDimensions(projectObject.length, clusterObject.breadth - projectObject.breadth)
        // newSpace.setStartCoords(clusterObject.coordX, clusterObject.coordY + projectObject.breadth);
        // console.log(newSpace);
        spaceList.push(newSpace);
        space.length -= project.length;
        // space.coordX += project.length;
        space.coordY += project.length * Math.sin((project.angle*Math.PI)/180);
        space.coordX += project.length * Math.cos((project.angle*Math.PI)/180);
        // space.coordY += project.length * Math.sin((project.angle*Math.PI)/180);
        // space.coordX += project.length * Math.cos((project.angle*Math.PI)/180);
        // console.log(space);
      }
      // spaceList.sortByBreadth();
      spaceList.sort(increasingBreadthSorter);
      break;
    }
  }
  // console.log(projectsList);
}

/*
var inputSpaces = [
  { 'id': "jdnfsk",
    'serial_no' : 1,
    'length': 2,
    'breadth': 2,
    'coordX': 0,
    'coordY': 0,
    'angle': 0,
    'level': 1
  }]
var inputProjects = [
  { 'id': "doc.id",
    'group_no': 1,
    'length': 1,
    'breadth': 1,
    'coordX': 0,
    'coordY': 0,
    'angle': 0,
    'group_theme': "doc.data().theme",
    'allocation': -1
  }, {
    'id': "doc.id",
    'group_no': 1,
    'length': 1,
    'breadth': 1,
    'coordX': 0,
    'coordY': 0,
    'angle': 0,
    'group_theme': "doc.data().theme",
    'allocation': -1
  }, {
    'id': "doc.id",
    'group_no': 1,
    'length': 1,
    'breadth': 1,
    'coordX': 0,
    'coordY': 0,
    'angle': 0,
    'group_theme': "doc.data().theme",
    'allocation': -1
  }, {
    'id': "doc.id",
    'group_no': 1,
    'length': 1,
    'breadth': 1,
    'coordX': 0,
    'coordY': 0,
    'angle': 0,
    'group_theme': "doc.data().theme",
    'allocation': -1
  }
]
*/
// console.log(inputProjects);
// allocateSpace(inputSpaces, inputProjects);
// console.log(inputProjects);
// console.log(spaceList);
// allocateSpace(spaceList, projectsList);
// spaceList.sortByIndex();
// projectsList.sortByIndex();
// console.log(spaceList);
// console.log(projectsList);
module.exports = { allocateSpace };
