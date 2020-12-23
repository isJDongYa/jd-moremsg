export interface Setup {
  duration?:number;
  width?:string;
  height?:string;
  background?:string;
}

import Vue from 'vue'

declare module 'vue/types/vue' {
  //  声明为 Vue 补充的东西
  interface VueConstructor {
    options: {
      name: string
    }
  }
}