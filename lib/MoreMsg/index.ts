import { VueConstructor } from 'vue/types/vue';

import MoreMsg from './MoreMsg.vue';

Object.assign(MoreMsg, {
  install(Vue:VueConstructor){
    Vue.component('jmoremsg', MoreMsg);
   }
})


 export default MoreMsg;