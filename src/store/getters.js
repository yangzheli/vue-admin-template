const getters = {
    token: state => state.user.token,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device
}

export default getters
