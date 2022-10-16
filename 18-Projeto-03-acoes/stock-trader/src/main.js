import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.filter("currancy", (value) => {
  return "R$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
