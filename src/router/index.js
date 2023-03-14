import { createRouter, createWebHistory } from 'vue-router'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_SELF_HOST),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventDetailView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
