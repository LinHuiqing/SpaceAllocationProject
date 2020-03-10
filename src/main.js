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

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(Buefy)
Vue.use(VueRouter)

const routes =[{
  name: 'Level 1',
  path: '/level1',
  component: Level1
  },{
  
  name: 'Level 2',
  path: '/level2',
  component: Level2
}]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

// let app 
// fb.auth.onAuthStateChanged(user => {
//   if (!App){
//     app = new Vue({
//       render: h => h(App),
//     }).$mount('#app')
//   }
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
  }).$mount('#app')

