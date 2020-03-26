import Vue from 'vue'
import App from './App.vue'
// const fb = require('./firebaseConfig.js')
import router from './router/index.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import './components/vuedraggable.css'

import * as firebase from 'firebase'
import 'firebase/auth'
//import 'firebase/firestore'
import store from "./store"
//import { firestorePlugin } from 'vuefire'
//Vue.use(firestorePlugin)


Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(Buefy)
Vue.config.productionTip = false

const configoptions={
  apiKey: "AIzaSyBQoZ4XZN0hggzkmbV2UAImAI0DPikC6go",
  authDomain: "spaceallocation311.firebaseapp.com",
  databaseURL: "https://spaceallocation311.firebaseio.com",
  projectId: "spaceallocation311",
  storageBucket: "spaceallocation311.appspot.com",
  messagingSenderId: "1015509067477",
  appId: "1:1015509067477:web:22ccf2bf88c29d318fe45c"
}
//export const db = firebase.firestore()

firebase.initializeApp(configoptions);



// let app 
// fb.auth.onAuthStateChanged(user => {
//   if (!App){
//     app = new Vue({
//       render: h => h(App),
//     }).$mount('#app')
//   }
// })


firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

/*firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};*/

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  }).$mount('#app');

