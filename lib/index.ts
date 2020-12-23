/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 20:09:45
 * @LastEditTime: 2020-12-08 11:51:47
 * @Description: 
 */
import { ComponentOptions, VueConstructor } from 'vue';
import MoreMsg from './MoreMsg';

const components: {
  [index:string]: VueConstructor
} = {
  MoreMsg
};

const componentsName = {
  MoreMsg: 'moremsg'
}

const install = (Vue:VueConstructor, options?:ComponentOptions<Vue>) => {
  
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const component = components[key];
      Vue.component('jd-' + component.name.toLowerCase(), component)
    }
  }

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
  
}