import Vue from "vue";

import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";
import config from "./aws-exports";

import App from "./App.vue";
import router from "./router";

Amplify.configure(config);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
