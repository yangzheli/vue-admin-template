// https://juejin.cn/post/6844903652881072141
/* eslint-disable */
import axios from '../utils/http.js'
import qs from 'qs'

const env = process.env.NODE_ENV

const devBaseURL = {
    user: "/vue-design/user",
}
const prodBaseURL = {
    user: '/vue-design/user',
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

export default {
    baseURL,
    user
}
