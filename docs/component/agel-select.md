# select 选择器

`agel-select` 组件是基于 `el-select` 组件的二次封装组件。

## 搭配表单使用

`options` 属性支持多种数据类型，`Array[string]`，`Array[Object]`，`Promise`，`Function`，若是 `Function` 类型，可以通过 `getRef` 获取组件实例调用 `getOptions` 进行主动刷新。

`filter` 属性可以开启关键字过滤，和 `filterable` 功能类似。

<ClientOnly><select-form/></ClientOnly>

::: details 点击查看代码
<<< @/docs/.vuepress/components/select-form.vue
:::

## 单独引入使用

<ClientOnly><select-demo/></ClientOnly>

::: details 点击查看代码
<<< @/docs/.vuepress/components/select-demo.vue
:::

## Select Attributes

| 属性        | 类型         | 默认值  | 说明                                 | 
| ----------- | ------------  | ------ | ------------------------------------ | 
| ......      | ......        | .........   |  Element-ui [Select Attributes](https://element.eleme.cn/#/zh-CN/component/select#select-attributes)      | 
| filter      | Boolean       | false       | 是否开启过滤查询                | 
| options     | Array/Function/Promise    |  -     | option 配置项         | 
| props       | Object        |  {label,value}     | label,value 别名          |
| slots       | Object        | -                   | 自定义插槽    | 

## Select method

| 属性          | 参数           |  说明                                   | 
| -----------   | ------------  |  ------------------------------------  | 
| focus         | -             |  聚焦                        |
| blur          | -             |  失焦            | 
| getOptions    | -             |  options 为 Function 时可调用           |

## Select slots

| 属性          |   说明                                   | 
| -----------    |   ------------------------------------  | 
| default        |  Option 组件列表           |
| prefix         |  Select 组件头部内容                        |
| empty          |  无选项时的列表                        | 