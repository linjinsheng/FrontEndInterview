<template>
   <div id="app">
       父组件 <br />
        <baseSlot>
            <template v-slot:two='info'>
                <div>我是第二个插槽的内容{{info.info}}</div>
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


 
 
