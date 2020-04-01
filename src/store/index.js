import Vue from 'vue'
import Vuex from 'vuex'
import allocation from './modules/allocation'
import login from './modules/login'
import form from './modules/form'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    allocation,
    login,
    form
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
