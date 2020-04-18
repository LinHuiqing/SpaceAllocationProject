import Vue from 'vue'
// import App from './App.vue'
import SpaceForm from './../../src/components/SpaceForm'
import store from './../../src/store'
import router from './../../src/router/index.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import drr from '@minogin/vue-drag-resize-rotate'

import * as firebase from 'firebase'
import 'firebase/auth'
import '@mdi/font/css/materialdesignicons.css'

Vue.component('drr', drr)
Vue.use(Buefy)
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("login/fetchUser", user);
});

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(SpaceForm)
  }).$mount('#app');
