import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "vue-app",
    entry: "//localhost:3000",
    container: "#VueContainer",
    activeRule: "/vueApp",
  },
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
