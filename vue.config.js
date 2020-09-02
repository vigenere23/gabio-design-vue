/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src/')
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('fork-ts-checker').tap((args) => {
      args[0].tsconfig = './src/tsconfig.json'
      return args
    })
  }
}
