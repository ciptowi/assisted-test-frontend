import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "registration-form",
      component: () => import("../pages/Front/RegistrationForm.vue"),
      meta: {
        public: true
      }
    },
    {
      path: "/test-prep",
      name: "test-prep",
      component: () => import("../pages/Front/TestPrep.vue"),
      meta: {
        public: true
      }
    },
    {
      path: "/test-tryout",
      name: "test-tryout",
      component: () => import("../pages/Front/TestTryout.vue"),
      meta: {
        public: true
      }
    },
    {
      path: "/test-start",
      name: "test-start",
      component: () => import("../pages/Front/Test.vue"),
      meta: {
        public: true
      }
    },
    {
      path: "/test-end",
      name: "test-end",
      component: () => import("../pages/Front/TestEnd.vue"),
      meta: {
        public: true
      }
    },
    {
      path: "/auth-login",
      name: "login",
      component: () => import("../pages/User/LoginPage.vue"),
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: "/auth-register",
      name: "register",
      component: () => import("../pages/User/RegisterPage.vue"),
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../pages/Dashboard/Home.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../pages/Category/Home.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/question",
      name: "question",
      component: () => import("../pages/Question/Home.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/add-question",
      name: "add-question",
      component: () => import("../pages/Question/Add.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/edit-question",
      name: "edt-question",
      component: () => import("../pages/Question/Edit.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/session",
      name: "session",
      component: () => import("../pages/Session/Home.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/add-session",
      name: "add-session",
      component: () => import("../pages/Session/Add.vue"),
      meta: {
        layout: 'admin'
      }
    },
    {
      path: "/edit-session",
      name: "edit-session",
      component: () => import("../pages/Session/Edit.vue"),
      meta: {
        layout: 'admin'
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const token = JSON.parse(localStorage.getItem("AUTH_KEY"))
  const loggedIn = !!token
  if (!isPublic && !loggedIn) {
    return next({
      path: '/auth-login',
      query: { redirect: to.fullPath }
    })
  }
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/dashboard')
  }
  next()
})

export default router;
