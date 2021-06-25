// https://juejin.cn/post/6844903652881072141
import axios from 'axios'
import store from '../store/index.js'
// import {
//     Message,
//     MessageBox
// } from 'element-ui'

const env = process.env.NODE_ENV

// env
if (env === 'development') {
    axios.defaults.baseURL = 'http://localhost:5050'
} else if (env === 'production') {
    axios.defaults.baseURL = 'http://localhost:5050'
}

// instance
const instance = axios.create({
    // timeout
    timeout: 1000 * 12
})

// request interceptor
instance.interceptors.request.use(
    config => {
        const token = store.state.token
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })

// response interceptor
instance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.error(error)
    })

export default instance
