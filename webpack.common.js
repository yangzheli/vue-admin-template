const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify")
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    mainFiles: ['index']
  },
  entry: {
    "build": '@/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: './',
    port: 5050,
    before: require('./mock/index.js')  // mock server
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        hotReload: true // 开启热重载
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@vue/babel-preset-jsx'],
      }
    }, {
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        fix: true,
        cache: false,
        failOnError: false,
        rules: {
          indent: ["error", 4]
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)(\?\S*)?$/i,
      use: [{
        loader: 'url-loader',
        options: {
          esModule: false
        }
      }],
      exclude: [path.resolve('src/icons')]
    }, {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      include: [path.resolve('src/icons')],
      options: {
        symbolId: 'icon-[name]'
      }
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}