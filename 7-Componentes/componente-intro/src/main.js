import Vue from "vue";
import App from "./App.vue";
import ComponenteContador from "./ComponenteContador.vue";

Vue.config.productionTip = false;
Vue.component("app-contador", ComponenteContador);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
