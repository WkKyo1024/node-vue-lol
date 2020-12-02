import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Article from "../views/Article.vue";
import Hero from "../views/Hero.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      { path: "/", name: "Home", component: Home },
      {
        path: "/articles/:id",
        name: "article",
        component: Article,
        props: true,
      },
    ],
  },
  { path: "/heros/:id", name: "hero", component: Hero, props: true },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
