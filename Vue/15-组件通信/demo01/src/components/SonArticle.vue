<template>
  <div>
    <div v-for="(item, index) in sonArticles" :key="index" @click="emitIndex(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['sonArticles'],
  methods: {
    emitIndex(index) {
      console.log('index---', index)
      this.$emit('onEmitIndex', index)
    }
  }
}
</script>