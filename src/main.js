import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'
import VueResizeText from 'vue-resize-text'
import Vuetify from '@/plugins/vuetify'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import * as firebase from 'firebase'
import 'firebase/auth'

Vue.use(Vuetify)
Vue.use(Buefy)
Vue.use(VueResizeText)
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("login/fetchUser", user);
});



new Vue({
  // el: '#app',
  router,
  store,
  Vuetify,
  render: h => h(App)
  }).$mount('#app');
