import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/index.js'

const whiteList = ['/login'] // no redirect whiteList

router.beforeEach((to, from, next) => {
    NProgress.start()

    const token = store.state.user.token
    console.log(token)
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
            NProgress.done()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) next()
        else next(`/login?redirect=${to.path}`)
        NProgress.done()
    }
})

router.afterEach(() => {
    NProgress.done()
})
