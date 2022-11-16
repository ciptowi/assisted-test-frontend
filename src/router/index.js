import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/auth-login",
      name: "login",
      component: () => import("../pages/LoginPage.vue"),
    },
    {
      path: "/auth-register",
      name: "register",
      component: () => import("../pages/RegisterPage.vue"),
    },
    {
      path: "/category-list",
      name: "category",
      component: () => import("../pages/ListCategory.vue"),
    }
  ],
});

export default router;
