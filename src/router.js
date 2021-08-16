import Vue from "vue";
import VueRouter from "vue-router";
import { Auth } from "aws-amplify";

import About from "./views/About.vue";
import AuthForm from "./components/AuthForm.vue";
import Home from "./views/Home.vue";
import InstantSession from "./views/InstantSession.vue";
import LogSession from "./views/LogSession.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/auth",
    name: "AuthForm",
    component: AuthForm,
  },
  {
    path: "/session",
    name: "InstantSession",
    component: InstantSession,
    meta: { requiresAuth: true },
  },
  {
    path: "/log",
    name: "LogSession",
    component: LogSession,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          path: "/auth",
        });
      });
  }
  next();
});

export default router;
