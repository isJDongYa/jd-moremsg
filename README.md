<!--
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 19:31:31
 * @LastEditTime: 2020-12-08 16:02:35
 * @Description: 
-->
# jd-moremsg

一个基于vue的“更多信息”的单个组件

## props

|props|描述|备注|
|---|---|---|
|[text](#text)|设置文本|none|
|[setup](#setup)|设置基本属性|none|
|[follow](#follow)|设置跟随性质|none|

#### text

该prop用来设置要显示的更多信息

> @Prop({default: ''}) private text?:string; 


#### setup

该prop用来设置一些基本属性

> @Prop() private setup?:Setup;

```ts
interface Setup {
  duration?:number; // 隔多久显示
  width?:string; // 宽度， 与css属性一致
  height?:string; // 高度， 与css属性一致
  background?:string; // 背景， 与css属性一致
}
```

默认值：

```ts
private defaultSetup:Setup = {
        duration: 2000,
        width: 'auto',
        height: 'auto',
        background: '#fff'
  }
```

#### follow

该prop用来设置此组件的跟随性质，默认为空字符串

> @Prop({default: ''}) private follow?:string;  

|可选值|状态|备注|
|---|---|---|
|'follow'|鼠标在组件内部移动时moremsg会跟随移动，当mouseleave时消失|none|
|'none'|鼠标在组件内移动时mroemsg会马上消失|none|
|''|鼠标在组件内部移动时moremsg不会消失，当mouseleave时消失|default|

