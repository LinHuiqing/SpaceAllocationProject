import db from '../../api/firebase/firebaseInit'
import { allocateSpace } from './../../api/algorithm/space-allocation-algorithm'

function sortByDecreasingAllocation(space1, space2) {
  if (space1.allocation == space2.allocation) {
    return 0;
  } else {
    return space1.allocation < space2.allocation ? -1:1;
  }
}

function updateAllocation(group) {
  let groupRef = db.collection('groups').doc(group.id);
  groupRef.update({allocation: group.allocation, coordX: group.coordX, coordY: group.coordY, angle: group.angle});
}

function resetAllocationFB(arr) {
  for (let group of arr) {
    let groupRef = db.collection('groups').doc(group.id);
    groupRef.update({allocation: -1, angle: 0});
  }
}

// initial state
// shape: [{ id, quantity }]
const state = {
  count: 0,
  clusters: {1:[], 2:[]},
  unallocated: [],
  allocated: {},
  unit: 1
}

// actions
const actions = {
  getClustersFBAsync ({ commit }) {
    commit('getClustersFB')
  },
  getGroupsFBAsync ({ commit }) {
    commit('getGroupsFB')
  },
  allocateAll ({state, commit}) {
    // console.log("allocating");
    commit('allocateAll');
    // console.log(2);
    // commit('allocateTop');
    // console.log(4);
    // let unallocatedCopy = JSON.parse(JSON.stringify{state.unallocated});
    // unallocatedCopy.sort(sortByDecreasingAllocation);
    state.unallocated.sort(sortByDecreasingAllocation);
    let removeIndex = 0;
    for (let group of state.unallocated) {
      // console.log("group", group);
      if (group.allocation != -1) {
        let current_ls = state.allocated[group.allocation] || [];
        current_ls.push(group);
        state.allocated[group.allocation] = current_ls;
        removeIndex++;
        updateAllocation(group);
        // let removeIndex = state.unallocated.indexOf(group);
        // state.unallocated.splice(removeIndex, 1);
        // console.log(group.allocation);
        // console.log("unallocated", state.unallocated);
        // console.log("allocated", state.allocated);
      }
    }
    state.unallocated.splice(0, removeIndex);
    // console.log("unallocated", state.unallocated);
    // console.log("allocated", state.allocated);
  },
  resetAllocation ({commit}) {
    commit('resetAllocation');
  }
}

// mutations
const mutations = {
  getClustersFB (state) {
    let rawCluster = {1:[], 2:[]}
    db.collection('clusters').get().then(querySnapshot => {
      querySnapshot.forEach(doc =>{
        const data ={
          'id': doc.id,
          'serial_no': doc.data().serial_no,
          'length': doc.data().length,
          'breadth': doc.data().breadth,
          'coordX': doc.data().coordX,
          'coordY': doc.data().coordY,
          'angle': doc.data().angle,
          'level': doc.data().level
        }
        rawCluster[data['level']].push(data);
      })
      // state.clusters[1] = new SpaceList(rawCluster[1], "cluster");
      // state.clusters[2] = new SpaceList(rawCluster[2], "cluster");
      state.clusters = rawCluster;
    })
  },
  getGroupsFB (state) {
    let rawGroups = {}
    db.collection('groups').get().then(querySnapshot => {
      querySnapshot.forEach(doc =>{
        const data ={
          'id': doc.id,
          'serial_no': doc.data().serial_no,
          'theme': doc.data().theme,
          'length': doc.data().length,
          'breadth': doc.data().breadth,
          'coordX': doc.data().coordX,
          'coordY': doc.data().coordY,
          'angle': doc.data().angle,
          'allocation': doc.data().allocation
        }
        let current_ls = rawGroups[data.allocation] || [];
        current_ls.push(data);
        rawGroups[data.allocation] = current_ls;
      })
      // console.log("raw:", rawGroups);
      state.unallocated = rawGroups[-1];
      // state.unallocated = new SpaceList(rawGroups[-1], "project");
      for (const allocation in rawGroups) {
        // console.log("key", allocation);
        if (allocation != -1) {
          // console.log(key);
          // state.allocated[allocation] = new SpaceList(rawGroups[allocation], "project");
          state.allocated[allocation] = rawGroups[allocation];
        }
      }
      console.log("allocated", state.allocated);
    })
  },
  setUnit(state, unit) {
    state.unit = unit;
  },
  // allocateAll(state) {
  //   // console.log("HELLO");
  //   // let allSpaces = state.clusters[1].clusterGroup;
  //   // allSpaces.push(...state.clusters[2].clusterGroup)
  //   // console.log(allSpaces);
  //   allocateBottom();
  //   allocateTop();
  //   // allocateSpace(allSpaces, state.unallocated)
  // },
  allocateAll(state) {
    let allClusters = JSON.parse(JSON.stringify(state.clusters[1]));
    allClusters.push(JSON.parse(JSON.stringify(state.clusters[2])));
    allocateSpace(allClusters, state.unallocated)
    // console.log(1);
  },
  // allocateTop(state) {
  //   allocateSpace(state.clusters[2], state.unallocated)
  //   // console.log(3);
  // },
  resetAllocation(state) {
    // console.log(state.unallocated);
    state.unallocated = state.unallocated || [];
    // console.log(state.unallocated);
    for (let cluster in state.allocated) {
      // console.log(cluster);
      state.unallocated.push(...state.allocated[cluster]);
      resetAllocationFB(state.allocated[cluster]);
      state.allocated = {};
    }
    // console.log(state.unallocated);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
