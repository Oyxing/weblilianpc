<template>
    <div class="t-right">
        <tr-top></tr-top>
        <tr-center></tr-center>
    </div>
</template>

<script>
import TrTop from './TRight/TrTop.vue'
import TrCenter from './TRight/TrCenter.vue'
export default {
    name: 'TRight',
    components: {
        TrTop,
        TrCenter
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.t-right{
    flex: 1;
    height: 100%;
}
</style>