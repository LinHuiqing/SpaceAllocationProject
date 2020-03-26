// import shop from '../../api/shop'
import db from '../../api/firebase/firebaseInit'
import { SpaceList } from './../../api/algorithm/space-allocation-algorithm'

// function getStudentsFB() {
//
// }

// initial state
// shape: [{ id, quantity }]
const state = {
  count: 0,
  clusters: [],
  unallocated: [],
  allocated: []
  // items: [],
  // checkoutStatus: null
}

// getters
// const getters = {}
// const getters = {
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },
  //
  // cartTotalPrice: (state, getters) => {
  //   return getters.cartProducts.reduce((total, product) => {
  //     return total + product.price * product.quantity
  //   }, 0)
  // }
// }

// actions
const actions = {
  getClustersFBAsync ({ commit }) {
    commit('getClustersFB')
  },
  getGroupsFBAsync ({ commit }) {
    commit('getGroupsFB')
  }
}
// const actions = {
  // checkout ({ commit, state }, products) {
  //   const savedCartItems = [...state.items]
  //   commit('setCheckoutStatus', null)
  //   // empty cart
  //   commit('setCartItems', { items: [] })
  //   shop.buyProducts(
  //     products,
  //     () => commit('setCheckoutStatus', 'successful'),
  //     () => {
  //       commit('setCheckoutStatus', 'failed')
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems })
  //     }
  //   )
  // },
  //
  // addProductToCart ({ state, commit }, product) {
  //   commit('setCheckoutStatus', null)
  //   if (product.inventory > 0) {
  //     const cartItem = state.items.find(item => item.id === product.id)
  //     if (!cartItem) {
  //       commit('pushProductToCart', { id: product.id })
  //     } else {
  //       commit('incrementItemQuantity', cartItem)
  //     }
  //     // remove 1 item from stock
  //     commit('products/decrementProductInventory', { id: product.id }, { root: true })
  //   }
  // }
// }

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
        // console.log(data);
        rawCluster.push(data);
      })
      state.clusters = new SpaceList(rawCluster, "cluster");
      // console.log(state.clusters);
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
        // console.log(data);
        rawGroups.push(data);
      })
      state.unallocated = new SpaceList(rawGroups, "project");
      // console.log(state.unallocated);
    })
  },
  // allocateGroups (state) {
  //   state.allocation =
  // }
  // pushProductToCart (state, { id }) {
  //   state.items.push({
  //     id,
  //     quantity: 1
  //   })
  // },
  //
  // incrementItemQuantity (state, { id }) {
  //   const cartItem = state.items.find(item => item.id === id)
  //   cartItem.quantity++
  // },
  //
  // setCartItems (state, { items }) {
  //   state.items = items
  // },
  //
  // setCheckoutStatus (state, status) {
  //   state.checkoutStatus = status
  // }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
