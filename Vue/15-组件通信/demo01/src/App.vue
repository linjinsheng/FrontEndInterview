// section父组件
<template>
  <div class="section">
    <com-article :articles="articleList"></com-article>
    ----------------------------------------------
    <son-article :sonArticles="sonArticleList" @onEmitIndex="onEmitIndex"></son-article>
    <p>{{currentIndex}}</p>
    ----------------------------------------------
    <show-num-com></show-num-com>
    <addition-num-com></addition-num-com>
    ----------------------------------------------
    <com-av ref="comA"></com-av>
    ----------------------------------------------
    <div>
    <div>{{msg}}</div>
    <com-b></com-b>
    <button @click="changeB">点击改变子组件值</button>
    <div></div>
    ----------------------------------------------
    <next-tick></next-tick>
    ----------------------------------------------
    <computed-and-watch></computed-and-watch>
  </div>
  </div>
</template>

<script>
import comArticle from './components/ComArticle.vue'
import sonArticle from './components/SonArticle.vue'
import showNumCom from './components/ShowNum.vue'
import additionNumCom from './components/AdditionNum.vue'
import comAv from './components/ComAv.vue'
import comB from './components/ComB.vue'
import nextTick from './components/NextTick.vue'
import computedAndWatch from './components/ComputedAndWatch.vue'
export default {
  name: 'ComArticle',
  components: { comArticle, sonArticle, showNumCom, additionNumCom, comAv, comB, nextTick, computedAndWatch },
  data() {
    return {
      articleList: ['红楼梦', '西游记', '三国演义'],
      sonArticleList:['苹果', '香蕉', '梨子'],
      currentIndex: -1,
      msg: 'Welcome'
    }
  },
  mounted () {
    const comA = this.$refs.comA;
    console.log(comA.name);  // Vue.js
    comA.sayHello();  // hello
  },
  methods: {
    onEmitIndex(idx) {
      this.currentIndex = idx
    },
    changeB() {
      // 获取到子组件B
      console.log(this.$children[0].messageA)
      this.$children[0].messageA = 'this is new value'
      console.log('changeB')
    }
  }
}
</script>
