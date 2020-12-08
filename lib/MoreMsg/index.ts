/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 20:12:17
 * @LastEditTime: 2020-12-08 14:54:35
 * @Description: 
 */

import { VueConstructor } from 'vue/types/vue';

import MoreMsg from './MoreMsg.vue';

 MoreMsg.install = (Vue: VueConstructor) => {
  Vue.component('jd-'+MoreMsg.name.toLowerCase(), MoreMsg);
 };

 export default MoreMsg;