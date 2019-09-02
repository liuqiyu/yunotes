# 使用 husky 和 lint-staged 来构建你的前端工作流

ESLint 是一个在前端工具链中被众人熟知的代码检查工具，它能够被开发者灵活的配置，使其能够达到我们提前制定好的代码规范的要求，
并且在编码过程中实时检测输入的代码，对于不符合代码规范的代码警告或报错。

`git commit` 是最常用的命令之一，它触发4个`hooks`, 分别是: `pre-commit`,`prepare-commit-msg`, `commit-msg`和`post-commit`。我们可以在`pre-commit`的时候去检测我们的代码是否存在问题。

## husky

安装

`npm install husky --save-dev`

Husky 能够帮你阻挡住不好的代码提交和推送。一句话很精准的说明了这个库的意义，而配置也非常简单，

```shell
 "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```

## lint-staged

安装

`npm install lint-staged --save-dev`

在你提交代码之前，Linting 的运行是更有意义的。当你这样去做了，那么就会有更少的错误进入你的代码库。

```shell
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },
```
