import Vue from 'vue'
import App from './App.vue'
import Level2 from './components/Level2.vue'
import Level1 from './components/Level1.vue'
// const fb = require('./firebaseConfig.js')
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import './components/vuedraggable.css'

import login from './components/login.vue'
import register from './components/register.vue'
import dashboard from './components/dashboard.vue'
import store from './store.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(Buefy)
Vue.use(VueRouter)

firebase.initializeApp({
  apiKey: "AIzaSyBQoZ4XZN0hggzkmbV2UAImAI0DPikC6go",
  authDomain: "spaceallocation311.firebaseapp.com",
  databaseURL: "https://spaceallocation311.firebaseio.com",
  projectId: "spaceallocation311",
  storageBucket: "spaceallocation311.appspot.com",
  messagingSenderId: "1015509067477",
  appId: "1:1015509067477:web:22ccf2bf88c29d318fe45c"
})
export const db = firebase.firestore()

const routes =[{
  name: 'Level 1',
  path: '/level1',
  component: Level1
  },{
  
  name: 'Level 2',
  path: '/level2',
  component: Level2
},
{
  name: 'register',
  path:'/register',
  component: register
},
{
  name: 'login',
  path:'/login',
  component: login
},
{
  name:'dashboard',
  path:'/dashboard',
  component: dashboard,
  //meta:{
    //requiresAuth: true
  //}
}]

const router = new VueRouter({routes, mode: 'history'})
//export default router
/*router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }else{
    next();
  }
});*/
Vue.config.productionTip = false

// let app 
// fb.auth.onAuthStateChanged(user => {
//   if (!App){
//     app = new Vue({
//       render: h => h(App),
//     }).$mount('#app')
//   }
// })

///*
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
//*/
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
  }).$mount('#app')

