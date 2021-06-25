const Mock = require('mockjs')
const bodyParser = require('body-parser')
const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')

const user = require('./modules/user.js')

const mocks = [
    ...user
]

const modules = path.join(__dirname, '/modules')

// register routes
const registerRoutes = function (app) {
    const routes = mocks.map(route => {
        const response = route.response
        return {
            url: new RegExp(route.url),
            type: route.type || 'get',
            response: (req, res) => res.json(Mock.mock(response instanceof Function ? response(req, res) : response))
        }
    })
    for (const route of routes) {
        app[route.type](route.url, route.response)
    }
}

// clear routes cache
const unregisterRoutes = function () {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(modules)) delete require.cache[require.resolve(i)]
    })
}

// mock server
module.exports = (app, server, compiler) => {
    // parse app.body
    // https://expressjs.com/en/4x/api.html#req.body
    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    registerRoutes(app)

    chokidar.watch(modules).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {
            try {
                unregisterRoutes()

                registerRoutes(app)
                console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
            } catch (error) {
                console.log(chalk.redBright(error))
            }
        }
    })
}