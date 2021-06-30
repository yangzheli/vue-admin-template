// https://juejin.cn/post/6844903652881072141
/* eslint-disable */
import axios from '../utils/http.js'
import qs from 'qs'

const env = process.env.NODE_ENV

const devBaseURL = {
    user: "/vue-design/user",
    role: "/vue-design/role",
}
const prodBaseURL = {
    user: '/vue-design/user',
    role: "/vue-design/role",
}
const baseURL = env === 'production' ? prodBaseURL : devBaseURL

const user = {
    // login
    login (params) {
        return axios.post(`${baseURL.user}/login`, params)
    },
    // logout
    logout (params) {
        return axios.post(`${baseURL.user}/logout`)
    }
}

const role = {
    // role permission
    getRoutes(params){
        return axios.post(`${baseURL.role}/getRoutes`, params)
    }
}

export default {
    baseURL,
    user,
    role
}
