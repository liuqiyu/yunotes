# Query-form 表单

#### new 全局主动事件

```js
// 1、主动获取表单参数

// query-form 调用
this.$refs.queryForm.getModel()

// query-table 调用
this.$refs.queryTable.$refs.queryForm.getModel()
```

### 样例视图

![Alt text](../images/query-form/query-form.jpg)

### HTML

```vue
<template>
  <query-form :formFields="formFields"
              :showReset="false"
              @formSubmit="search"></query-form>
</template>

<script>
  export default {
    name: 'analysis',
    data () {
      return {
        // 表单配置
        formFields: [
          // 纯文本
          {
            label: '纯文本',
            type: 'text',
            placeholder: '请输入纯文本',
            defaultValue: 1,  // 初始化默认值
            columnName: 'text'
          },
          // 下拉框 
          {
            label: '下拉框',
            type: 'select',
            placeholder: '请选择下拉框',
            columnName: 'select',
            // clearable: false, 下拉框是否可以清空当前值
            options: [
              {
                value: 123,
                label: 123
              }
            ]
          },
          // 日期选择器
          {
            label: '日期',
            type: 'daterange',
            placeholder: '请选择日期范围',
            columnName: 'daterange'
          },
          // 下拉树
          {
            label: '下拉树',
            type: 'selectTree',
            placeholder: '请选择日期范围',
            columnName: 'selectTree',
            data: [{
                id: 1,
                name: '中国移动集团',
                subList: [{
                  id: 2,
                  name: '广东'
                  },{
                  id: 3,
                  name: '江西'
                  },{
                  id: 4,
                  name: '湖南'
                  },{
                  id: 5,
                  name: '辽宁'
                  }]
            }],
            props: {
              value: 'id',
              label: 'name',
              children: 'subList'
            }
          }
        ]
      }
    },
    methods: {
      // 点击搜索回调函数
      search (model) {
        console.log(model)
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
showReset | 是否显示重置按钮 | Boolean | false/true | true

### QueryForm Events

事件名 | 说明 | 参数 
---|---|---|---|---
formSubmit | 当用户手动点击查询触发的事件 | model


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
clearable | type = select 下拉框时 是否可清空当前值 | true | true / false | —

### FormFields Type Attributes

值 | 说明
---|---
text | 纯文本框 
select | 下拉框
daterange | 日期选择器
datetimerange | 事件选择器 
selectTree | 下拉树










