// Composables
import { createRouter, createWebHistory } from 'vue-router';
// import Settings from '@/views/SettingPage.vue';
// import MainHomePage from '@/components/MainHomePage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/components/MainHomePage.vue'),
    children: [
      {
        path: '/',
        name: 'mypage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/MyPage.vue'),
      },
      {
        path: '/doc',
        name: 'doc',
        component: () => import('@/components/DocumentPage.vue')
      },
      {
        path: '/doc/edit',
        name: 'docedit',
        component: () => import('@/components/DocumentEditPage.vue')
      },
      {
        path: '/th',
        name: 'th',
        component: () => import('@/components/TimelogHistoryPage.vue')
      },
      {
        path: '/an',
        name: 'an',
        component: () => import('@/components/AnnouncementPage.vue')
      },
      {
        path: '/df',
        name: 'df',
        component: () => import('@/components/DocumentFilePage.vue')
      },
      // {
      //   path: '/set',
      //   name: 'set',
      //   component: () => import ('@/components/Settings.vue')
      // },
    ],
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
