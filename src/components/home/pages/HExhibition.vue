<template>
    <div class="h-exhibition">
        <he-left></he-left>
        <he-right></he-right>
    </div>
</template>

<script>
import HeLeft from './HExhibition/HeLeft.vue'
import HeRight from './HExhibition/HeRight.vue'
export default {
    name: 'HExhibition',
    components:{
        HeLeft,
        HeRight
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.h-exhibition{
    width: 100%;
    height: calc( 100vh - 406px );
    margin-top: 18px;
    display: flex;
}
</style>