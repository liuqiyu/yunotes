# Tree-Select 下拉树

### 介绍
> 该组件是基于Element的**select下拉框**及**Tree树形控件**做的二次封装形成的一个下拉树形组件。

### 使用方法
继承了树形组件的调用方法，用户只需要传入树形组件必要的data和props参数即可正常使用，另外后续会扩展更多必要的传参及方法，使用方法如下：
 
``` html
<template>
    <asp-tree-select
      v-model="checkData"
      :data="Treedata"
      :props="props">
    </asp-tree-select>
</template>
<script>
  export default {
    data() {
      return {
	    checkData:[],
        Treedata: [{
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
    }
  }
</script>
```

### 样例视图

![Alt text](../images/asp-tree-select.png)


### 参数说明

|接收参数 | 参数类型 |  说明 |
| :----: | :----:| :------: |
| data   | array |  展示数据，与树形控件一致 |
| props  | object|  配置选项，与树形控件一致 |
| showCheckbox  | Boolean|  默认为true，可设置为单选|
| v-model| array | 获取选中节点的value  |

