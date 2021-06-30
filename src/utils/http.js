// https://juejin.cn/post/6844903652881072141
import axios from 'axios'
import store from '../store/index.js'
import { Message } from 'element-ui'

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
        const data = response.data
        if (data.code !== 200) {
            Message({
                type: 'error',
                message: data.msg || 'Error',
                duration: 1000
            })
            return Promise.reject(new Error(data.msg || 'Error'))
        } else return data
    },
    error => {
        return Promise.error(error)
    })

export default instance
