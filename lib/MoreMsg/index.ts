import { VueConstructor } from 'vue/types/vue';

import MoreMsg from './MoreMsg.vue';

Object.assign(MoreMsg, {
  install(Vue:VueConstructor){
    Vue.component('jd-moremsg', MoreMsg);
   }
})


 export default MoreMsg;