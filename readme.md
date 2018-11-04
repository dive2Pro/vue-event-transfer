# 这是什么?

主要是提供一个自定义 vue directive

# 它做了什么?

当在写 vue 的 Component 的时候, 会碰到一种情况就是当前组件所使用的组件中传递的事件, 需要交由本组件的使用者去使用. 使用 v-e-transfer 简化这个操作

# 如何使用?

```js
   import Vue from 'vue'
   import VueEventTransfer from 'vue-event-transfer';

   Vue.use(VueEventTransfer);

   ...
```

// custom-component

```js
   <template>
     <button @click="$emit('click', 'hello')">Click me</button>
   </template>
```

// using component

```js
  <template>
    <div>
      can you   <custom-component  v-e-transfer /> ?
    </div>
  </teamplate>
  <script>
   {
       name: 'demo-use'
   }
  </script>
```

// which i can

```js
 <template>
   <demo-use @click="alert('$event')" />
 </template>
```

## 参数

```js
<custom-component v-e-transfer:prefix="value" />
```

这里的 prefix 会作为 事件名的前缀
value 由于 vue 的机制, 只能传值 , 所以如果要传递多个值, 可以这样

```js
<custom-component v-e-transfer:prefix="{val: value}" />
```

在外层这样使用:

```js
  <demo-use @prefix-click="value, demoPassed"
```
