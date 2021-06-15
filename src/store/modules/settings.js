import defaultSettings from '@/setting.js';

const {
  darkStyle
} = defaultSettings;

const state = {
  darkStyle: darkStyle
}

const mutations = {
  CHANGE_SETTING: (state, {
    key,
    value
  }) => {
    if (state.hasOwnProperty(key)) state[key] = value;
  }
}

const actions = {
  changeSetting: function ({
    commit
  }, data) {
    commit('CHANGE_SETTING', data);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}