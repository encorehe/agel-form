# agel-form | 使 element-ui form 组件更简单

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/agel-form.svg)](https://www.npmjs.com/package/agel-form)
[![download](https://img.shields.io/npm/dt/agel-form)](https://npmcharts.com/compare/agel-form?minimal=true)


## 文档

- [官网 - 使用文档](https://agrass.gitee.io/agel-form/) 


## 安装使用

`npm install agel-form --save # yarn add agel-form` 

## 介绍

[agel-form](https://github.com/agrass-GitHub/agel-form) 是基于 [element-ui form](https://element.eleme.cn/#/zh-CN/component/form) 的二次封装，极简的思想，完全的数据驱动，拥有绝对的灵活性，可以帮助你更快速的开发！up! up! up!


## 特性

该组件的思想就是以一个 form 对象来做所有的操作，它做了如下事情：

- 支持 element-ui 所有表单组件 attributes 配置
- 支持 element-ui 所有表单组件 events 事件
- 支持 element-ui 所有表单组件 slots 插槽
- 支持 element-ui Row Col 组件属性
- 智能回填 form.data，placeholder，rules
- 灵活自定义组件 / 搭配第三方组件
- 全局配置
- 联动显示隐藏
- 响应式布局


## 如此简单

```html
<template>
  <agel-from v-model="from"></agel-from>
</template>
 
<script>
export default {
  data() {
    return {
      from: {},
    };
  },
};
</script>
```