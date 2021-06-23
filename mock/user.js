const user = [{
    id: 1,
    username: 'admin',
    role: 'admin',
    password: 'vue.design'
}, {
    id: 2,
    username: 'user',
    role: 'user',
    password: 'vue.design'
}]

export default {
    // 'post|/vue-design/user/login': () => {
    //     return {
    //         status: 200,
    //         message: 'success',
    //         data: user
    //     }
    // }
    login: () => {
        return {
            status: 200,
            message: 'success',
            data: user
        }
    }
}
