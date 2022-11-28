import { createRouter, createWebHistory } from "vue-router";
import Admin from '../layouts/Admin.vue';
import Default from '../layouts/Default.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "registration-form",
      component: () => import("../pages/Front/RegistrationForm.vue"),
      meta: {layout: Default}
    },
    {
      path: "/test-prep",
      name: "test-prep",
      component: () => import("../pages/Front/TestPrep.vue"),
      meta: {layout: Default}
    },
    {
      path: "/test-tryout",
      name: "test-tryout",
      component: () => import("../pages/Front/TestTryout.vue"),
      meta: {layout: Default}
    },
    {
      path: "/test-start",
      name: "test-start",
      component: () => import("../pages/Front/Test.vue"),
      meta: {layout: Default}
    },
    {
      path: "/test-end",
      name: "test-end",
      component: () => import("../pages/Front/TestEnd.vue"),
      meta: {layout: Default}
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/User/LoginPage.vue"),
      meta: {layout: Default}
    },
    {
      path: "/auth-register",
      name: "register",
      component: () => import("../pages/User/RegisterPage.vue"),
      meta: {layout: Default}
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../pages/Dashboard/Home.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../pages/Category/Home.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/question",
      name: "question",
      component: () => import("../pages/Question/Home.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/add-question",
      name: "add-question",
      component: () => import("../pages/Question/Add.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/edit-question",
      name: "edt-question",
      component: () => import("../pages/Question/Edit.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/session",
      name: "session",
      component: () => import("../pages/Session/Home.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/add-session",
      name: "add-session",
      component: () => import("../pages/Session/Add.vue"),
      meta: {layout: Admin}
    },
    {
      path: "/edit-session",
      name: "edit-session",
      component: () => import("../pages/Session/Edit.vue"),
      meta: {layout: Admin}
    }
  ],
});

export default router;
