import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GridComponent from "@/components/shared/DataTableComponent.vue";

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


