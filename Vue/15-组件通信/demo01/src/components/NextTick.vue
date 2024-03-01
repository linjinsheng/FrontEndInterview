<template>
  <div>
    <ul ref="next">
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['苹果', '西瓜', '桃子']
    }
  },
  methods: {
    add() {
      this.items.push('555')
      //  使用nextTick中的回调函数,在下一次Dom更新循环结束以后,执行回调
      //  vue中的数据更新是异步
      //  用于获取更新后的DOM
      //  使用nextTick方法可以保证用户定义的逻辑在更新之后执行
      this.$nextTick(() =>{
        let children = this.$refs.next;
        let length = children.childNodes.length;
        console.log('length---', length);
      })
    }
  }
}
</script>