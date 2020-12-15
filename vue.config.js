const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const path = require('path')
const resolve = path.resolve
let config = {}
if(process.env.NODE_ENV === 'development') {
  config = {
    pages: {
      index: {
        entry: 'examples/main.ts'
      }
    }
  }
} else if(process.env.NODE_ENV === 'production') {
  config = {
    pages: {
      index: {
        entry: 'lib/index.ts'
      }
    },
    configureWebpack: {
     mode:'production',
     plugins: [
       new BundleAnalyzerPlugin()
     ],
     externals: {
        'vue': 'Vue',
        'vue-property-decorator': 'vue-property-decorator',
        "core-js": "core-js",
     }
   },
    productionSourceMap: false,
    css: { extract: false }
    // 去掉文件名中的 hash
    // filenameHashing: false,
    // // 删除 HTML 相关的 webpack 插件
    // chainWebpack: config => {
    //   config.plugins.delete('html-index')
    //   config.plugins.delete('preload-index')
    //   config.plugins.delete('prefetch-index')
    //   config.plugins.delete('copy')
    // }
  }
}


module.exports = config
