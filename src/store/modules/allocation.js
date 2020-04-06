import db from '../../api/firebase/firebaseInit'
import { allocateSpace } from './../../api/algorithm/space-allocation-algorithm'

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
  allocateAll ({commit}) {
    // console.log("allocating");
    commit('allocateBottom');
    // console.log(2);
    commit('allocateTop');
    // console.log(4);
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
      console.log(state.allocated);
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
  allocateBottom(state) {
    allocateSpace(state.clusters[1], state.unallocated)
    // console.log(1);
  },
  allocateTop(state) {
    allocateSpace(state.clusters[2], state.unallocated)
    // console.log(3);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
