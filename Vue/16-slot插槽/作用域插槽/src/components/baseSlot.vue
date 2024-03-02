<template>
    <div>
        子组件<br />
       <slot name='two' :info='info'></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:"aaaaaa"
        }
    }
}
</script>

