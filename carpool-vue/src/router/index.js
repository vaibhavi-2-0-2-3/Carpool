import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserLogin from "@/views/UserLogin.vue";
import UserSignup from "@/views/UserSignup.vue";
import CaptainLogin from "@/views/CaptainLogin.vue";
import CaptainSignup from "@/views/CaptainSignup.vue";
import MainPage from "@/views/MainPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "UserLogin", component: UserLogin },
  { path: "/signup", name: "UserSignup", component: UserSignup },
  { path: "/captain-login", name: "CaptainLogin", component: CaptainLogin },
  { path: "/captain-signup", name: "CaptainSignup", component: CaptainSignup },
  { path: "/main-page", name: "MainPage", component: MainPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
