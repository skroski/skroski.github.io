import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import vuetify from '@/plugins/vuetify' // path to vuetify export;

Vue.filter("grana", (value: number) => {
  if (typeof value !== "number") {
    return value;
  }
  return `R$ ${value.toFixed(2)}`;
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
