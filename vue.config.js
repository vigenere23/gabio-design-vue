/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/gio-library-showcase/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@showcase': path.join(__dirname, './showcase')
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('fork-ts-checker').tap((args) => {
      args[0].tsconfig = './src/vue/tsconfig.json'
      return args
    })
  }
}
