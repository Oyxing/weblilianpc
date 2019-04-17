<template>
    <div class="t-left">
        <tl-top></tl-top>
        <tl-bottom></tl-bottom>
    </div>
</template>

<script>
import TlTop from './TLeft/TlTop.vue'
import TlBottom from './TLeft/TlBottom.vue'
export default {
    name: 'TLeft',
    components: {
        TlTop,
        TlBottom
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.t-left{
    width: 260px;
    height: 100%;
    margin-right: 30px;
}
</style>