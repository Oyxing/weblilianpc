<template>
    <div class="d-center">
        <div style='display:flex; border-bottom: 1px solid #ccc;'>
            <div style='margin: 4px 10px 0 0;font-size:16px'>
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="d-center-nav">
                <div 
                    class="d-center-nav-item" 
                    v-for="(item,index) in navList" 
                    :key="index"
                    :class="{active:index!=nowIndex}"
				    @click="toggleTabs(index)"
                >
                    {{item.name}}
                </div>
            </div>
        </div>
        <div>
            <div v-show="nowIndex===0">
                <t-center></t-center>
            </div>
            <div v-show="nowIndex===1">
                <t-center></t-center>
            </div>
            <div v-show="nowIndex===2">
                <t-center></t-center>
            </div>
            <div v-show="nowIndex===3">
                <t-center></t-center>
            </div>
            <div v-show="nowIndex===4">
                <t-center></t-center>
            </div>
        </div>
    </div>
</template>

<script>
import TCenter from './pages/TCenter.vue'
export default {
    name: 'IndexTransaction',
    components: {
        TCenter
    },
    data(){
        return{
            nowIndex: 0,
            navList:[{
                name: '古典书画'
            }, {
                name: '摄影作品'
            }, {
                name: '文玩'
            }, {
                name: '当代艺术'
            }, {
                name: '素描'
            }],
        }
    },
    methods: {
        toggleTabs:function(index){
            this.nowIndex=index;
        }
    },
}
</script>

<style scoped>
.d-center{
    width: 100%;
}
.d-center-nav{
    width: 100%;
    height: 30px;
    display: flex;
}
.d-center-nav-item{
    padding: 0 16px;
    font-size: 14px;
    color: #0096ff;
    text-align: center;
    cursor: pointer;
    line-height: 30px;
}
.active{
    color: #666666;
}
.t-center{
    width: 100%;
    height: calc( 100vh - 166px );
    margin-top: 18px;
    display: flex;
}
</style>