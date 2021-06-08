import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index.vue'

export const constantRoutes = [{
  path: '/',
  component: Layout,
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {}
  }]
}]

export const asyncRoutes = [{
  path: '/permission',
  component: Layout,
  meta: {
    roles: ['admin', 'editor']
  },
  children: [{
    path: 'role',
    component: () => import('@/views/permission/role.vue'),
    meta: {
      roles: ['admin']
    }
  }]
}]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()

export const resetRouter = function () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router