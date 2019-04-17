<template>
    <div>
        <div class="n-top">
            <div 
                class="n-top-item" 
                v-for='(item,index) in NnavList' 
                :key='index'
                :class="index == nowIndex?'active':''"
				@click="toggleTabs(index)"
            >
                <span>{{ item.name }}</span>
            </div>
        </div>
        <div>
            <div v-show="nowIndex===0">
                <n-bottom></n-bottom>
            </div>
            <div v-show="nowIndex===1">
                <n-bottom></n-bottom>
            </div>
            <div v-show="nowIndex===2">
                <n-bottom></n-bottom>
            </div>
            <div v-show="nowIndex===3">
                <n-bottom></n-bottom>
            </div>
            <div v-show="nowIndex===4">
                <n-bottom></n-bottom>
            </div>
            <div v-show="nowIndex===5">
                <n-bottom></n-bottom>
            </div>
        </div>
    </div>
</template>

<script>
import NBottom from './news/NBottom.vue'
export default {
    name: 'IndexNew',
    components: {
        NBottom
    },
    data(){
        return{
            nowIndex: 0,
            NnavList: [{
                name: '首页'
            },{
                name: '资讯'
            },{
                name: '专栏'
            },{
                name: '名家分析'
            },{
                name: '收藏心得'
            },{
                name: '艺链圈'
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
.n-top{
    width: 100%;
    height: 34px;
    border-bottom: 2px solid #518df2;
}
.active{
    background: #518df2;
}
.active>span{
    color: #fff !important;
    border-right: 0 !important;
}
.n-top>.n-top-item:last-child span{
    border-right: 0; 
}
.n-top-item{
    float: left;
    padding-top: 8px;
    height: 34px;
}
.n-top-item span{
    padding: 2px 26px;
    color: #5c5c5c;
    font: 100 13px/14px '微软雅黑';
    border-right: 1px solid #d6d6d6;
    display: block;
    cursor: pointer;
}
</style>