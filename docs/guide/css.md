# css使用

::: tip 目的
让全局公用的样式统一化管理，便于后续版本的迭代开发，减少项目的维护成本。
:::

## 代码展示

### 公有文件：variavle.scss

```scss
/*
T01 21 16 B     T02 21 14 B     T03 21 12 B     T04 21 12 N     T05 22 12 N
T06 23 12 N     T07 $d 12 N     T08 $t 12 N     T09 12 12 N     T10 11 16 B
T11 11 14 B     T12 11 12 B     T13 11 12 N     T14 -- 12 B     T15 21 14 N
T16 22 14 N     T17 白 12 B     T18 -- 12 B     T19 白 12 N
*/

// 主色

// 告警级别色调
$level-1: #FF1043;
$level-2: #FF7800;
$level-3: #FFD200;
$level-4: #00C6FF;

$bg-gray: #F6F9F9;


// 阴影
$main-box-shadow: 0 0 10px 5px rgba(0,0,0,.02);

```

### 场景1：如何使用公用样式

```sass
<style lang="scss" scoped>
  @import 'src/assets/css/variable';
  .top-wrapper {
        box-shadow: $main-box-shadow;
        color: $level-1;
   }
</style>
```

### 场景2：如何使用公用class

首先定义公用类文件

### common.scss

```css
@import './variable';

// 背景

.level-gb-1 {
  background: $level-1 !important;
}

.level-gb-2 {
  background: $level-2 !important;
}

.level-gb-3 {
  background: $level-3 !important;
}

.level-gb-4 {
  background: $level-4 !important;
}
```

然后直接在业务代码里面使用相对应的`class`.

```vue
<div class="level-gb-1"></div>
```


