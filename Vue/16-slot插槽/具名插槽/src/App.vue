<template>
   <div id="app">
       父组件 <br />
        <baseSlot>
            <template v-slot:one>
                <div>我是第一个插槽的内容</div>
            </template>
            <template v-slot:two>
                <div>我是第二个插槽的内容</div>
            </template>
        </baseSlot>
   </div>
</template>
<script>
import baseSlot from './components/baseSlot.vue'
export default {
    components:{
        baseSlot
    },
    data(){
        return {
            data:1234
        }
    }
}
</script>
<style>
</style>


 
 
