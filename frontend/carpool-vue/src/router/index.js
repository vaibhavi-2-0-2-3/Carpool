import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import UserLogin from "../pages/UserLogin.vue";
import UserSignup from "../pages/UserSignup.vue";
import CaptainLogin from "../pages/CaptainLogin.vue";
import CaptainSignup from "../pages/CaptainSignup.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "UserLogin", component: UserLogin },
  { path: "/signup", name: "UserSignup", component: UserSignup },
  { path: "/captain-login", name: "CaptainLogin", component: CaptainLogin },
  { path: "/captain-signup", name: "CaptainSignup", component: CaptainSignup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
