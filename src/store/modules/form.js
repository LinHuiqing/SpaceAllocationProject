// import shop from '../../api/shop'
import db from '../../api/firebase/firebaseInit'
// initial state
// shape: [{ id, quantity }]
const state = {
  group_no: -1,
  length: 1,
  breadth: 1,
  power_outlets: 5
  // items: [],
  // checkoutStatus: null
}

// getters
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
  submitGroupFBAsync ({ commit }) {
    commit('submitGroupFB')
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
  submitGroupFB ( state ){
    console.log({
      group_no: state.group_no,
      length: state.length,
      breadth:state.breadth,
      power_outlets: state.power_outlets
    });
    db.collection('students').add({
      group_no: state.group_no,
      length: state.length,
      breadth:state.breadth,
      power_outlets: state.power_outlets
    })
    .then(docRef =>{
      console.log('Form submitted: ', docRef.id)
      // this.$router.push('/')
    })
    .catch(error => {
      console.error('Error adding student: ', error)
    })
  },
  setGroupNo ( state, groupNo ) {
    state.group_no = parseInt(groupNo);
  },
  setLength ( state, length ) {
    state.length = length;
  },
  setBreadth ( state, breadth ) {
    state.breadth = breadth;
  },
  setPowerOutlets ( state, powerOutlets ) {
    state.power_outlets = parseInt(powerOutlets);
  }
  // group_no: null,
  // length: null,
  // breadth: null,
  // power_outlets:null
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
