import Vue from 'vue'
import App from './App.vue'

import Lib from '../lib'


Vue.use(Lib)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
