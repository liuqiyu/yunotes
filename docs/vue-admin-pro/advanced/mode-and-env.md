# 环境变量和模式

本项目基于 `vue-cli3` 进行构建开发。所有的环境变量都可以根据配置进行处理。

[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

```bash
.env                # 在所有的环境中被载入  如果是指定模式参数会被覆盖
.env.local          # 在所有的环境中被载入，但会被 git 忽略
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


## 模式

你可以通过传递 --mode 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 package.json 脚本中加入：

```
"dev-build": "vue-cli-service build --mode development",
```


## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 `.env.local` 文件取而代之。
本地环境文件默认会被忽略，且出现在 `.gitignore` 中。

`.local`也可以加在指定模式的环境文件上，比如 `.env.development.local` 将会在 `development` 模式下被载入，且被 `git` 忽略。
