<template>
    <div class="t-center">
        <t-left></t-left>
        <t-right></t-right>
    </div>
</template>

<script>
import TLeft from './TCenter/TLeft.vue'
import TRight from './TCenter/TRight.vue'
export default {
    name: 'TCenter',
    components: {
        TLeft,
        TRight
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.t-center{
    width: 100%;
    height: calc( 100vh - 166px );
    margin-top: 18px;
    display: flex;
}
</style>