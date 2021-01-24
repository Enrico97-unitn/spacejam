import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import Axios from "axios";
import VueAxios from "vue-axios";
import DataService from "./dataservice";

import "vuetify/dist/vuetify.css";

// importo le views
import PictureSearch from "./Views/PictureSearch.vue";
import ContactUs from "./Views/ContactUs.vue";
import AboutUs from "./Views/AboutUs.vue";
import Home from "./Views/Home.vue";
import Login from "./components/Login.vue";
import VoteImage from "./Views/VoteImage.vue";
import Asteroids from "./Views/Asteroids.vue";

Vue.use(Vuetify, {
  iconfont: "mdi"
});
Vue.use(VueRouter);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;

// impostazioni del router: dove impostiamo i vari percorsi
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/PictureSearch", name: "PictureSearch", component: PictureSearch },
    { path: "/ContactUs", name: "ContactUs", component: ContactUs },
    { path: "/AboutUs", name: "AboutUs", component: AboutUs },
    { path: "/Home", name: "Home", component: Home },
    { path: "/main", name: "Login", component: Login },
    { path: "/VoteImage/:nasa_id", name: "VoteImage", component: VoteImage },
    { path: "/Asteroids", name: "Asteroids", component: Asteroids }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !DataService.isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
