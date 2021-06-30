const asyncRoutes = [
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

module.exports = [
  {
    url: '/vue-design/',
    type: 'post',
    response: (req, res) => {
      return asyncRoutes
    }
  }
]