const files = require.context('./langs', true, /\.js$/)

const modules = files.keys().reduce((modules, path) => {
    // './app.js' => 'app'
    const name = path.replace(/^\.\/|.js$/g, '').toUpperCase()
    modules[name] = files(path).default
    return modules
}, {})

export default modules
