import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://stock-trader-b4e3e-default-rtdb.firebaseio.com/",
    });
  },
});
