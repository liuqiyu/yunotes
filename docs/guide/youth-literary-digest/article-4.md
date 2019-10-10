# Vue 生命周期钩子自定义事件

## 父组件监听子组件 Hooks（钩子）

使用 hook:为前缀，为 vue 生命周期钩子注册自定义事件。

```vue
<template>
  <Child @hook:mounted="childMounted"/>
</template>


<script>
import Child from './child'
export default {
  components: {
    Child
  },
  methods: {
    childMounted() {
      console.log('Child was mounted')
    }
  }
}
</script>
```
