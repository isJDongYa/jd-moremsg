import { ComponentOptions, VueConstructor } from 'vue'
import MoreMsg from './MoreMsg'

const components: {
  [index:string]: VueConstructor
} = {
  MoreMsg
};

const install = (Vue:VueConstructor, options?:ComponentOptions<Vue>) => {
  
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const component = components[key];
      Vue.component('jd-' + component.options.name.toLowerCase(), component)
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