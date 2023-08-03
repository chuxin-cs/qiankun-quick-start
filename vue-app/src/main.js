import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 生命周期

new Vue({
  router: createRouter(),
  store,
  render: (h) => h(App),
}).$mount("#app");
