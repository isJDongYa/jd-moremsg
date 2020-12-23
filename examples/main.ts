/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 19:31:18
 * @LastEditTime: 2020-12-08 12:58:26
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

import Lib from '../lib'
// import Lib from './jd-moremsg.umd.min.js'

// console.dir(Lib.MoreMsg.options.name);


Vue.use(Lib)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
