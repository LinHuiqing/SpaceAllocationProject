import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import allocation from './modules/allocation'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter, 
    allocation
    // cart,
    // products
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
