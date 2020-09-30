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
    },
    entry: {
      index: path.resolve(__dirname, './src/vue/entry.ts')
    },
    optimization: {
      minimize: true
      // runtimeChunk: 'single',
      // splitChunks: {
      //   chunks: 'async',
      //   cacheGroups: {
      //     vendors: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors'
      //     }
      //   }
      // }
    }
    // output: {
    //   filename: '[name].[contenthash:8].bundle.js',
    //   chunkFilename: '[name].[contenthash:8].bundle.js',
    //   path: path.resolve(__dirname, 'dist')
    // }
  },
  chainWebpack: (config) => {
    config.plugin('fork-ts-checker').tap((args) => {
      args[0].tsconfig = './src/vue/tsconfig.json'
      return args
    })
  }
}
