/* eslint-disable */
import {
    get,
    post,
} from '../utils/http.js'

const env = process.env.NODE_ENV

const devBaseURL = {
    user: "/vue-design/user",
}
const prodBaseURL = {
    user: '/vue-design/user',
}
const baseURL = env === 'production' ? prodBaseURL : devBaseURL

export const user = {
    // login
    login (params) {
        return post(`${baseURL.user}/login`, params)
    },
    // logout
    logout (params) {
        return post(`${baseURL.user}/logout`, params)
    }
}

export default {
    baseURL,
    // user
}
