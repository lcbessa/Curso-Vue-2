import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.directive("destaque", {
  bind(binding) {
    // el.style.backgroundColor = "lightgreen";
    binding.style.backgroundColor = binding.value;
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
