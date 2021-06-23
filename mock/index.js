import Mock from 'mockjs'

import user from './user.js'

// 设置拦截 ajax 请求的时间
Mock.setup({
    timeout: '200-600'
})

// let configArray = []

// const files = require.context('.', true, /\.js$/)

// files.keys().forEach(key => {
//     if (key === './index.js') return
//     configArray = configArray.concat(files(key).default)
// })

// configArray.forEach(item => {
//     for (const [path, target] of Object.entries(item)) {
//         const protocal = path.split('|')
//         Mock.mock(new RegExp('^' + protocal[0]), protocal[1], target)
//     }
// })

Mock.mock(/\/vue-design\/user\/login/, 'post', user.login)
