import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routes } from "./routes";
import "./main.css";

import { extend } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'Nenhuma tarefa informada'
});


Vue.config.productionTip = false;

const router = new VueRouter({
  routes: routes,
  linkActiveClass: "active",
  mode: "history",
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
