import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Layout from '@/layout/index.vue'

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/form',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/form/index.vue'),
      meta: {
        title: 'Form',
        icon: 'form'
      }
    }]
  },
  {
    path: '/exception',
    component: Layout,
    redirect: '/exception/403',
    meta: {
      title: 'Exception',
      icon: 'exception'
    },
    children: [{
      path: '403',
      component: () => import('@/views/403/index.vue'),
      meta: {
        title: '403',
        icon: '403'
      }
    }, {
      path: '404',
      component: () => import('@/views/404/index.vue'),
      meta: {
        title: '404',
        icon: '404'
      }
    }]
  },
  {
    path: '/user',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/user/index.vue'),
      meta: {
        title: 'User',
        icon: 'user'
      }
    }]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

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

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

export const resetRouter = function () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router