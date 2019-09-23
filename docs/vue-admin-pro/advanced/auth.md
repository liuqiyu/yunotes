# 权限控制 （一） 操作权限

我们大部分的项目是通过当前登录用户角色去控制权限。假如一个新增功能按钮，当用户没有新增的权限，我们选择隐藏该按钮。

## 指令权限

封装了一个指令权限，能简单快速的实现按钮级别的权限判断

### 使用

```vue
<template>
  <el-button v-auth="auth || null">新增</el-button>
</template>

<script>
export default {
    data () {
        return {
            auth: 'add'
        }
    }
}
</script>
```

如果该角色返回的接口不包含`add`，那么该按钮就会被隐藏。[uth.js](https://github.com/liuqiyu/vue-admin-pro/blob/master/src/directives/auth.js)

