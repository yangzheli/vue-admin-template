import {
  constantRoutes,
  asyncRoutes
} from '@/router/index.js'

/** 
 * 判断当前用户是否有权限
 * @param roles
 * @param route
 */
const hasPermisssion = function (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true;
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  setRoutes: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
}

export default {
  state,
  mutations,
}