import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from './api/api.js' // api

import store from './store/index.js' // store

import app from './App.vue'

import router from './router'

import './permission' // permission control

import i18n from '@/locales/index.js' // internationalization

import '@/styles/index.scss' // golbal css

import './icons' // icons

// import '../mock/index.js' // mock

Vue.use(ElementUI)
Vue.prototype.$api = api // mount the api to the vue prototype
Vue.prototype.$store = store // mount the store to the vue prototype

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    i18n,
    render: h => h(app)
})
