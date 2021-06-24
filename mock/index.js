// https://www.jianshu.com/p/c5568910e946
import Mock from 'mockjs'

// timeout
Mock.setup({
    timeout: '200-600'
})

let api = []

const files = require.context('./modules', true, /\.js$/)

files.keys().forEach(key => {
    api = api.concat(files(key).default)
})

api.forEach(item => {
    for (const [path, target] of Object.entries(item)) {
        const protocal = path.split('|')
        Mock.mock(new RegExp(protocal[1]), protocal[0] || 'get', target)
    }
})
