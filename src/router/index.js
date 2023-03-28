import { createRouter, createWebHistory } from 'vue-router'
import EventDetailView from '../views/EventDetailView.vue'
import EventView from '../views/EventView.vue'
import HomeView from '../views/HomeView.vue'
import PagesEventDetail from '../components/pages/eventDetail.vue'
import PagesAllEvent from '../components/pages/allEvent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventDetailView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView,
      children: [
        {
          path: '/event/:id',
          name: 'event-detail',
          component: PagesEventDetail
        },
        {
          path: '/event',
          name: 'event-all',
          component: PagesAllEvent
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView
    }
  ]
})

export default router
