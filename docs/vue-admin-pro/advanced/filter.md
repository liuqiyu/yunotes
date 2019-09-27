# Filter 过滤器

## 时间：年月日

```vue
{{new Date() || date}}
// 2019-09-27
```

## 时间：年月日 时分秒

```vue
{{new Date() || time}}
// 2019-09-27 10:21:22
```

## 时间：年月日时分

```vue
{{new Date() || minute}}
// 2019-09-27 10:21
```

## 时间：时分秒

```vue
{{new Date() || second}}
// 10:21:22
```

## 时间：年月

```vue
{{new Date() || month }}
// 2019-09
```

## money 金额人民币 

```vue
{{123213 || money}}
// ￥13,213,213.00
```

## thousands 千位分隔符 

```vue
{{123213 || thousands}}
// 13,213,213
```
