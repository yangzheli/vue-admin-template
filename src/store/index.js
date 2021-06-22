import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'

import app from './modules/app.js'
import settings from './modules/settings.js'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
    // modules,
    modules: {
        app,
        settings
    },
    getters
})

export default store
