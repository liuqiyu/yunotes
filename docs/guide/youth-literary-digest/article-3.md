# Javascript 和 Sass 共享变量

## variable.scss

```
$top-bg: #173997;
$menu-bg: #292C31;

:export {
    topBg: $top-bg,
    menuBg: $menu-bg
}
```

## index.vue

```js
import variable from 'variable.scss'

variable.topBg
```
