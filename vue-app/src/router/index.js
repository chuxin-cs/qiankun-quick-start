import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

export function createRouter(path) {
  console.log(process.env.BASE_URL, "process.env.BASE_URL");
  return new VueRouter({
    mode: "history",
    base: window.__POWERED_BY_QIANKUN__ ? path : process.env.BASE_URL || "/",
    routes,
  });
}

export default {
  createRouter,
};
