// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import SecondPage from '../components/SecondPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/second-page',
    name: 'SecondPage',
    component: SecondPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
});

export default router;
