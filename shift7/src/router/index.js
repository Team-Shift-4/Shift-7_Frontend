// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Settings from '@/views/SettingPage.vue';
import DocumentPage from '@/components/DocumentPage.vue'
// import MyPage from '@/components/MyPage.vue'
// import TimelogHistory from '@/components/TimelogHistory.vue'
// import MainHomePage from '@/components/MainHomePage.vue'

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
      
    ],
  },
    {
        path: '/set',
        name: 'set',
        component: Settings,
      },
      {
        path: '/doc',
        name: 'doc',
        component: DocumentPage
      },
      // {
      //   path: '/mypage',
      //   name: 'mypage',
      //   component: MyPage
      // },
      // {
      //   path: '/th',
      //   name: 'th',
      //   component: TimelogHistory
      // },
    // path: '/main',
    // name: 'main',
    // component: MainHomePage
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
