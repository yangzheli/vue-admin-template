/* eslint-disable */
import {
    get,
    post,
    form,
    upload
} from '../utils/http.js'

const env = process.env.NODE_ENV

const devBaseURL = {
    user: "http://192.168.1.109:8080/web/user",
}
const prodBaseURL = {
    user: 'http://w.e-scope.cn/tomcat1/berlinTown/user',
}
const baseURL = env === 'production' ? prodBaseURL : devBaseURL

const user = {
    // 用户登录接口
    login (params) {
        return purePost(`${baseURL.user}/login`, params)
    },
    // 退出接口
    logout (params) {
        return post(`${baseURL.user}/logout`, params)
    }
}

// 导出接口
export default {
    baseURL,
    user
}
