// 子组件 article.vue
<template>
  <div>
    <div v-for="(item, index) in articles" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>