import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "registration-form",
      component: () => import("../pages/Front/RegistrationForm.vue"),
    },
    {
      path: "/test-prep",
      name: "test-prep",
      component: () => import("../pages/Front/TestPrep.vue"),
    },
    {
      path: "/test-tryout",
      name: "test-tryout",
      component: () => import("../pages/Front/TestTryout.vue"),
    },
    {
      path: "/test-start",
      name: "test-start",
      component: () => import("../pages/Front/Test.vue"),
    },
    {
      path: "/test-end",
      name: "test-end",
      component: () => import("../pages/Front/TestEnd.vue"),
    },
    {
      path: "/auth-login",
      name: "login",
      component: () => import("../pages/User/LoginPage.vue"),
    },
    {
      path: "/auth-register",
      name: "register",
      component: () => import("../pages/User/RegisterPage.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../pages/Dashboard/Home.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../pages/Category/Home.vue"),
    },
    {
      path: "/question",
      name: "question",
      component: () => import("../pages/Question/Home.vue"),
    },
    {
      path: "/add-question",
      name: "add-question",
      component: () => import("../pages/Question/Add.vue"),
    },
    {
      path: "/edit-question",
      name: "edt-question",
      component: () => import("../pages/Question/Edit.vue"),
    },
    {
      path: "/session",
      name: "session",
      component: () => import("../pages/Session/Home.vue"),
    },
    {
      path: "/add-session",
      name: "add-session",
      component: () => import("../pages/Session/Add.vue"),
    },
    {
      path: "/edit-session",
      name: "edit-session",
      component: () => import("../pages/Session/Edit.vue"),
    }
  ],
});

export default router;
