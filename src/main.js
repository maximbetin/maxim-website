import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import store from "./Store";
import vuetify from "./plugins/vuetify";
/*import IconifyIcon from '@iconify/vue';
import home from '@iconify-icons/mdi/home';
import faceWithMonocle from '@iconify-icons/twemoji/face-with-monocle';*/

require("./style.css");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
