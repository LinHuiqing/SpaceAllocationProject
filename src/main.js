import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import './components/vuedraggable.css'

import * as firebase from 'firebase'
import 'firebase/auth'
import store from "./store"

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(Buefy)
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  }).$mount('#app');