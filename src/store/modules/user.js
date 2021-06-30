import Cookies from 'js-cookie'

const state = {
    username: '',
    token: Cookies.get('token')
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
        Cookies.set('token', token)
    }
}

const actions = {
    login: function({ commit }, user) {
        this.$api.user.login(user).then(res => {
            console.log(res)
            this.$api.role.getRoutes().then(res => {
                console.log(res)
                this.$store.dispatch('permission/generateRoutes', res)
            })
        })
        commit('SET_TOKEN', null)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
