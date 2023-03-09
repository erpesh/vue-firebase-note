import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = createRouter({
  base: "/vue-firebase-note/",
  history: createWebHistory("/vue-firebase-note/"),
  routes
})

export default router