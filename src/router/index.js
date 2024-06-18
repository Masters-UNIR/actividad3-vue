import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EnvironmentView from '../views/EnvironmentView.vue'
import ContactoView from '../views/ContactoView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/environment',
      name: 'environment',
      component: EnvironmentView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactoView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ErrorView
    }
  ]
})

export default router
