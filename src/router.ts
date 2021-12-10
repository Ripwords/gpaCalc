import { createWebHashHistory, createRouter } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/gpaCalc/home'
  },
  {
    path: '/gpaCalc/',
    redirect: '/gpaCalc/home',
    component: () => import('./components/SplitPane.vue'),
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('./pages/Home.vue')
      },
      {
        name: 'Settings',
        path: 'settings',
        component: () => import('./pages/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router