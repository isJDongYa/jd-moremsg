# jmoremsg

- 一个基于vue的“更多信息”的单个组件
- 根据包裹组件所在位置自动调整显示位置
- 默认显示位置为right-bottom, 距离鼠标指针 [ 3px, 3px ], 请注意，该默认位置并未提供修改prop

## setup

```shell
npm install @jdorg/jmoremsg --save

import JDMoremsg from '@jdorg/jmoremsg'

Vue.use(JDMoremsg) 
```

## Props

|props|描述|备注|
|---|---|---|
|[text](#text)|设置文本|none|
|[setup](#setup)|设置基本属性|none|
|[follow](#follow)|设置跟随性质|none|

### text

该prop用来设置要显示的更多信息

> @Prop({default: ''}) private text?:string; 


### setup

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

### follow

该prop用来设置此组件的跟随性质，默认为空字符串

> @Prop({default: ''}) private follow?:string;  

|可选值|状态|备注|
|---|---|---|
|'follow'|鼠标在组件内部移动时moremsg会跟随移动，当mouseleave时消失|none|
|'none'|鼠标在组件内移动时mroemsg会马上消失|none|
|''|鼠标在组件内部移动时moremsg不会消失，当mouseleave时消失|default|

## Slots

### default

要让鼠标在上面经过duration显示moremsg包裹的内容

```html
<slot></slot>
```

### custom

可自定义显示内容，如果此slot和名为text的prop同时存在，此slot会显示在text上方

```html
<slot name="custom"></slot>
<div class="more-msg-text">{{ text }}</div> <!--如上所言， text是在名为custom的slot下方定义的-->
```

## example

```html
<jmoremsg 
text="This is more message" 
:setup="{ background:'#ddd' }"
follow="follow"
>
  <img class="img" slot="custom" src="./assets/imgs/header.jpg" alt="img">
  <button class="btn">This is a button in default slot</button>
</jmoremsg>
```

```less
.btn {
  height: 100px;
}
.img {
  width: 300px;
}
```

![example](https://raw.githubusercontent.com/isJDongYa/jmoremsg/master/examples/assets/imgs/example.gif)

## 其它

@jdorg是一个开源前端组件的社区，如果你有开源组件的想法，欢迎加入我们

![qqgroup](https://raw.githubusercontent.com/isJDongYa/jmoremsg/master/examples/assets/imgs/@jdorg_z.jpg)