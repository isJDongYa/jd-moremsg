/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 19:47:54
 * @LastEditTime: 2020-12-07 20:05:44
 * @Description: 配置文件
 */

 const path = require('path')
 const resolve = path.resolve

 module.exports = {
   pages: {
     index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
     }
   },
  //  configureWebpack: {
  //    resolve: {
  //      alias: {
  //        '@': resolve(__dirname, './examplaes')
  //      }
  //    }
  //  }
 }
