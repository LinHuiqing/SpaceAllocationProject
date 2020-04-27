/* Sorter functions to sort spaces and projects */
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

/* Space allocation algorithm */
function allocateSpace(rawSpaceList, projectsList) {
  if (!Array.isArray(rawSpaceList) || !Array.isArray(projectsList)) {
    // Branch 0 - if an invalid input is given
    throw new TypeError("Invalid input to allocateSpace() function.");
  }
  projectsList.sort(decreasingBreadthSorter);
  let spaceList = JSON.parse(JSON.stringify(rawSpaceList));
  spaceList.sort(increasingBreadthSorter);

  for (let project of projectsList) {
    for (let space of spaceList) {
      if (project.length > space.length || project.breadth > space.breadth) {
        // Branch 1 - if project is bigger than space
        continue;
      }

      project.allocation = space.serial_no;
      project.coordX = space.coordX;
      project.coordY = space.coordY;
      project.angle = space.angle;

      if (project.length == space.length && project.breadth == space.breadth) {
        // Branch 2 - if project is the same size as space
        let removeIndex = spaceList.indexOf(space);
        spaceList.splice(removeIndex, 1);
      } else if (project.length == space.length) {
        // Branch 3 - if project has same length as space (but smaller breadth)
        space.breadth -= project.breadth;
        space.coordY += project.breadth * Math.cos((project.angle*Math.PI)/180).toFixed(3);
        space.coordX -= project.breadth * Math.sin((project.angle*Math.PI)/180).toFixed(3);
      } else if (project.breadth == space.breadth) {
        // Branch 4 - if project has same breadth as space (but smaller length)
        space.length -= project.length;
        space.coordY += project.length * Math.sin((project.angle*Math.PI)/180).toFixed(3);
        space.coordX += project.length * Math.cos((project.angle*Math.PI)/180).toFixed(3);
      } else {
        // Branch 5 - if project is smaller than space in both length and breadth
        let newSpace = JSON.parse(JSON.stringify(space));
        newSpace.length = project.length
        newSpace.breadth = space.breadth - project.breadth
        newSpace.coordY = space.coordY + project.breadth * Math.cos((project.angle*Math.PI)/180).toFixed(3);
        newSpace.coordX = space.coordX - project.breadth * Math.sin((project.angle*Math.PI)/180).toFixed(3);

        spaceList.push(newSpace);
        space.length -= project.length;
        space.coordY += project.length * Math.sin((project.angle*Math.PI)/180).toFixed(3);
        space.coordX += project.length * Math.cos((project.angle*Math.PI)/180).toFixed(3);
      }
      spaceList.sort(increasingBreadthSorter);
      break;
    }
  }
}

module.exports = { allocateSpace };
