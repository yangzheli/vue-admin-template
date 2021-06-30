import { constantRoutes } from '@/router/index.js'

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes: function({ commit }, routes) {
        commit('SET_ROUTES', routes)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
