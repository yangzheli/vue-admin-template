import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from './api/api.js' // 将 api 挂载到 vue 原型

import store from './store/index.js' // 将 store 挂载到 vue 原型

import app from './App.vue'

import router from './router'

import './permission' // permission control

import i18n from '@/locales/index.js' // internationalization

import '@/styles/index.scss' // golbal css

import './icons'
Vue.use(ElementUI) // 导入 api 接口
Vue.prototype.$api = api // 导入 store 接口
Vue.prototype.$store = store // icons

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    i18n,
    render: h => h(app)
})
