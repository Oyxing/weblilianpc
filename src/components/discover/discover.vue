<template>
    <div class="d-center">
        <div style='display:flex; border-bottom: 1px solid #ccc;'>
            <div style='margin: 4px 30px 0 0;font-size:16px'>
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
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
            <div v-show="nowIndex===1">
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
            <div v-show="nowIndex===2">
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
            <div v-show="nowIndex===3">
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
            <div v-show="nowIndex===4">
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
            <div v-show="nowIndex===5">
                <d-emphasize></d-emphasize> 
                <d-bottom></d-bottom>
            </div>
        </div>
    </div>
</template>

<script>
import DEmphasize from './pages/DEmphasize.vue'
import DBottom from './pages/DBottom.vue'
export default {
    name: 'IndexDiscover',
    components:{
        DEmphasize,
        DBottom
    },
    data(){
        return{
            nowIndex:0,
            navList: [{
                name: "书画"
            },{
                name: "陶艺"
            },{
                name: "木艺"
            },{
                name: "雕刻"
            },{
                name: "素描"
            },{
                name: "西方油画"
            }]
        }
    },
    methods: {
        toggleTabs:function(index){
            this.nowIndex=index;
        }
    }
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
    width: 60px;
    font-size: 14px;
    color: #0096ff;
    text-align: left;
    cursor: pointer;
    line-height: 30px;
}
.active{
    color: #666666;
}
</style>