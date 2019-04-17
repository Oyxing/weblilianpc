<template>
    <div class="n-top">
        <div class="n-top-item" v-for='(item,index) in NnavList' :key='index'><span>{{ item.name }}</span></div>
    </div>
</template>

<script>
export default {
    name: 'NTop',
    data(){
        return{
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
    }
}
</script>

<style scoped>
.n-top{
    width: 100%;
    height: 34px;
    border-bottom: 2px solid #518df2;
}
.n-top>.n-top-item:nth-child(1){
    background: #518df2;
}
.n-top>.n-top-item:nth-child(1) span{
    color: #fff;
    border-right: 0; 
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