// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Settings from '@/views/SettingPage.vue';
import DocumentPage from '@/components/DocumentPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/setting',
        component: Settings,
      },
      {
        path: '/test',
        component: DocumentPage
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
