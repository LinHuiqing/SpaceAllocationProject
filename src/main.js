import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import './components/vuedraggable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
