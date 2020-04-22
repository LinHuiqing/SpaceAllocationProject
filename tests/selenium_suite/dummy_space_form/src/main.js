import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import form from "./store/form";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Buefy);
Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  modules: {
    form,
  },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
