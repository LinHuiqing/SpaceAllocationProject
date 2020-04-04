import db from '../../api/firebase/firebaseInit'
import { SpaceList } from './../../api/algorithm/space-allocation-algorithm'

// initial state
// shape: [{ id, quantity }]
const state = {
  count: 0,
  clusters: [],
  unallocated: [],
  allocated: []
}

// actions
const actions = {
  getClustersFBAsync ({ commit }) {
    commit('getClustersFB')
  },
  getGroupsFBAsync ({ commit }) {
    commit('getGroupsFB')
  }
}

// mutations
const mutations = {
  getClustersFB (state) {
    let rawCluster = []
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
        rawCluster.push(data);
      })
      state.clusters = new SpaceList(rawCluster, "cluster");
    })
  },
  getGroupsFB (state) {
    let rawGroups = []
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
        rawGroups.push(data);
      })
      state.unallocated = new SpaceList(rawGroups, "project");
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
