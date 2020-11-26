import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Swiper2, { Navigation, Pagination } from "swiper";
Swiper2.use([Navigation, Pagination]);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
import "./assets/iconfont/iconfont.css";
import "./assets/scss/style.scss";
import router from "./router";

import Card from "./components/Card.vue";
Vue.component("lol-card", Card);

import ListCard from "./components/ListCard.vue";
Vue.component("lol-list-card", ListCard);

import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/web/api",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
