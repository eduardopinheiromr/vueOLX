import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/entrar", component: () => import("../views/Login.vue") },
  { path: "/cadastro", component: () => import("../views/Register.vue") },
  { path: "/ad/:id", component: () => import("../views/AdPage.vue") },
  { path: "/:category", component: () => import("../views/CategoryPage") },
  { path: "/anunciar", component: () => import("../views/CreateAd") },
  { path: "/anuncios", component: () => import("../views/MyAds") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
