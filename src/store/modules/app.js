import Cookies from 'js-cookie';

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !! +Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) Cookies.set('sidebarStatus', 1);
    else Cookies.set('sidebarStatus', 0);
  },
  CLOSE_sidebar: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  }
}

const actions = {
  toggleSideBar: function ({
    commit
  }) {
    commit('TOGGLE_SIDEBAR');
  },
  closesidebar: function ({
    commit
  }, {
    withoutAnimation
  }) {
    commit('CLOSE_sidebar', withoutAnimation);
  },
  toggleDevice: function ({
    commit
  }, device) {
    commit('TOGGLE_DEVICE', device);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}