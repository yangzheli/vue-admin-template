import axios from 'axios'
import QS from 'qs' // 引入 qs 模块，用来序列化 post 类型的数据
import store from '../store/index.js'
// import {
//     Message,
//     MessageBox
// } from 'element-ui'

const env = process.env.NODE_ENV

// 环境的切换
if (env === 'development') {
    axios.defaults.baseURL = 'http://localhost:8080'
} else if (env === 'production') {
    axios.defaults.baseURL = 'http://localhost:8080'
}

// 设置请求超时时间
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(
    config => {
    // 每次发送请求之前判断 vuex 中是否存在 token
    // 如果存在，则统一在 http 请求的 header 都加上 token，这样后台根据 token 判断你的登录情况
    // 即使本地存在 token，也有可能 token 是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = store.state.token
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
    // 如果返回的状态码为 200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是 2 开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        return Promise.error(error)
    })

// 封装 get 方法
export function get (url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

// 封装 post 方法
export function post (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params)).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
