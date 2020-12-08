/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-08 10:22:07
 * @LastEditTime: 2020-12-08 14:06:44
 * @Description: 
 */

import Vue from 'vue';
import Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
  // 来声明全局 property
  interface VueConstructor {
    install: (Vue:VueConstructor, options?: ComponentOptions<Vue>) => void;
    
  }
}

export interface Setup {
  duration?:number;
  width?:string;
  height?:string;
  background?:string;
}