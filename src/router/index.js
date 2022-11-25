import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/participant",
      name: "registration-form",
      component: () => import("../pages/RegistrationForm.vue"),
    },
    {
      path: "/test-prep",
      name: "test-prep",
      component: () => import("../pages/TestPrep.vue"),
    },
    {
      path: "/test-tryout",
      name: "test-tryout",
      component: () => import("../pages/TestTryout.vue"),
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
      path: "/admin-panel",
      name: "admin-panel",
      component: () => import("../layouts/Admin.vue"),
    },
    {
      path: "/",
      name: "admin-panel",
      component: () => import("../layouts/Admin.vue"),
    },
    {
      path: "/category-list",
      name: "category",
      component: () => import("../pages/ListCategory.vue"),
    }
  ],
});

export default router;
