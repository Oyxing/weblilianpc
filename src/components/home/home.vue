<template>
    <!-- 头部 -->
    <div>
        <h-header></h-header>
        <!-- 通知 -->
        <h-inform></h-inform>
        <!-- 关注 -->
        <h-attention></h-attention>
        <!-- 国手上线/最新交易 -->
        <h-exhibition></h-exhibition>    
        <div class="h-exhibition">
        </div>
    </div>
</template>

<script>
import HHeader from './pages/HHeader.vue'
import HInform from './pages/HInform.vue'
import HAttention from './pages/HAttention.vue'
import HExhibition from './pages/HExhibition.vue'
export default {
    name: 'IndexHome',
    components:{
        HHeader,
        HInform,
        HAttention,
        HExhibition
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

</style>