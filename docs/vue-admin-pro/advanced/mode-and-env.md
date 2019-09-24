# 环境变量和模式

本项目基于 `vue-cli3` 进行构建开发。所有的环境变量都可以根据配置进行处理。

[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

```bash
.env                # 在所有的环境中被载入  如果是指定模式参数会被覆盖
.env.production     # 在production环境中被载入
.env.[mode]         # 在指定的模式中环境中被载入
```

环境变量文件只包含环境变量的"键=值"对；

```
VUE_APP_SECRET=secret
```


::: tip 注意！！！
环境变量必须以`VUE_APP_`为开头。如： `VUE_APP_TITLE`、`VUE_APP_TITLE`

您在代码中可以通过如下方式获取:

```
console.log(process.env.VUE_APP_XXXX)
```
:::
