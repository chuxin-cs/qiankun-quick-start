import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;

// 生命周期
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router: createRouter("/vue-app/"),
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时 也就是不是qiankun环境
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 注入
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
// 挂载
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
// 销毁
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}

//***************************************尝试将当前应用作为main的子应用然后是sun-app主应用*********************************** */
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "sun-app",
    entry: "//localhost:8082",
    container: "#SunContainer",
    activeRule: "/vue-app/sun-app",
  },
]);

// 启动 qiankun
start();
