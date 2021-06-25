/* eslint-disable */
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

const CODE = '1314'

const accoutlogin = function(username, password) {
    if (validAccount(username, password)) {
        return {
            code: 200,
            msg: 'success',
            data: null
        }
    }
    return {
        code: 401,
        msg: 'Username or password is incorrect',
        data: null
    }
}

const phoneLogin = function(phoneNumber, verificationCode) {
    if (verificationCode === CODE) {
        return {
            code: 200,
            msg: 'success',
            data: null
        }
    }
    return {
        code: 401,
        msg: 'verification code is incorrect',
        data: null
    }
}

const validAccount = function(username, password) {
    const users = ['admin', 'user']
    return users.indexOf(username.trim()) >= 0 && password === 'vue.design'
}

module.exports = [
    {
        url: '/vue-design/user/login',
        type: 'post',
        response: (req, res) => {
            const { loginType = 0, username, password, phoneNumber, verificationCode } = req.body
            if (!loginType)  return accoutlogin(username, password) 
            else return phoneLogin(phoneNumber, verificationCode)
        }
    },
    {
        url: '/vue-design/user/logout',
        type: 'post',
        response: (req, res) => {
            const { loginType = 0, username, password, phoneNumber, verificationCode } = req.body
            if (!loginType)  return accoutlogin(username, password) 
            else return phoneLogin(phoneNumber, verificationCode)
        }
    }
]
