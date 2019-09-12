# QueryForm 查询表单

用于表单查询，封装了多种类型的表单控件。

### 视图

![Alt text](../images/v-tool-bar/v-tool-bar.png)

### 代码

```vue
<template>
  <div class="content-container">
    <query-form ref="queryTable"
                :form-fields="formFields"></query-form>
  </div>
</template>

<script>
export default {
    data () {
        return {
           formFields: [
                 {
                   label: '姓名',
                   placeholder: '请输入姓名',
                   columnName: 'name'
                 },
                 {
                   label: '昵称',
                   placeholder: '请输入昵称',
                   columnName: 'nickname'
                 },
                 {
                   label: '年龄',
                   placeholder: '请输入年龄',
                   columnName: 'age'
                 },
                 {
                   label: '性别',
                   type: 'select',
                   placeholder: '请选择性别',
                   columnName: 'select',
                   options: [
                     {
                       value: 0,
                       label: '全部'
                     },
                     {
                       value: 1,
                       label: '男'
                     },
                     {
                       value: 2,
                       label: '女'
                     }
                   ]
                 },
                 // 下拉框
                 {
                   label: '下拉框',
                   type: 'select',
                   placeholder: '请选择下拉框',
                   columnName: 'select1',
                   multiple: true,
                   options: [
                     {
                       value: 1,
                       label: '你好1'
                     },
                     {
                       value: 2,
                       label: '你好2'
                     }
                   ]
                 }
               ],
        }
    }
}
</script>
```

<hr/>

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
formFields | 参数 | Array | — | —

### QueryForm Events

事件名 | 说明 | 参数
---|---|---|---|---
getModel | 当用户手动点击查询触发的事件 | model


### FormFields Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
label | 值 | string | — | —
type | 类型 | string | 详情如下： | text
placeholder | 占位文本 | string | — | —
columnName | 对应字段 | string | — | —
options | type = select 时下拉选项 | array | — | —
data | type = selectTree 时下拉选项 | array | — | —
props | type = selectTree 配置选项 详情看 el-tree 插件 | object | — | —
show | 是否隐藏 | boolean | true/false | true
defaultValue | 默认值 | — | — | —
multiple | type = select 下拉框时可配置 | false | true / false | —
load | 加载子树数据的方法，仅当 lazy 属性为true 时生效 | — | function(node, resolve) | —
lazy | 是否懒加载子节点，需与 load 方法结合使用 | boolean | true / false | —

### FormFields Type Attributes

值 | 说明
---|---
text | 纯文本框
select | 下拉框
daterange | 日期选择器
datetimerange | 事件选择器
selectTree | 下拉树
