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
    router: createRouter("/vue-app/sun-app/"),
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
