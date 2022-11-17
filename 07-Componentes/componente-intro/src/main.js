import Vue from "vue";
import App from "./App.vue";
import ComponenteContadores from "./ComponenteContadores.vue";

Vue.config.productionTip = false;
Vue.component("app-contadores", ComponenteContadores);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
