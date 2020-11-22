import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";

import "./style.css";

Vue.config.productionTip = false;
import http from "./http";
Vue.prototype.$http = http;

Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + "/upload";
    },
  },
  // http.js 文件里只让axios请求带上了authorization的请求头
  // 而上传文件用的是elementui自带的底层的ajax的请求库 请求头没有authorization字段
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`,
      };
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
