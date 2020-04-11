import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import * as firebase from 'firebase'
import 'firebase/auth'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Buefy)
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("login/fetchUser", user);
});

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
  }).$mount('#app');
