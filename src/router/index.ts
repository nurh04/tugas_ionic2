import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

import { isNotLogin } from "./guards/isNotLogin";
import { isLogin } from "./guards/isLogin";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: () => import('@/views/pages/Login.vue'),
    beforEnter: isNotLogin,
  },
  {
    path: '/transaction/history',
    component: () => import('@/views/pages/HistoryTransaction.vue'),
    beforEnter: isLogin,
  },
  {
    path: '/transaction',
    component: () => import('@/views/pages/Transaction.vue'),
    beforEnter: isLogin,
  },
  {
    path: '/scanner',
    component: () => import('@/views/pages/scan.vue'),
    beforEnter: isLogin,
  },
  {
    path: '/tabs/',
    component: TabsPage,
    beforeEnter: isLogin
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
