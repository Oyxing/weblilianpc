<template>
    <div class="list-right">
        <div class="list-right-top">
            <div v-for="(item,index) in navList" :key="index">{{item}}</div>
        </div>
        <div class="list-right-bottom">
            <div class="list-right-bottom-c" v-for="(item,index) in itemLst.slice((currentPage-1)*9,currentPage*9)" :key='index'>
                <div>{{item.xuhao}}</div>
                <div>{{item.name}}</div>
                <div>{{item.zuozhe}}</div>
                <div>{{item.time}}</div>
                <div>{{item.cny}}</div>
                <div>{{item.chiyou}}</div>
                <div :class="item.se">{{item.zhuangtai}}</div>
                <div><i class="iconfont icon-shezhi"></i></div>
                <div><span>详情</span></div>
            </div>
            <el-pagination
                class="fenye"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="8"
                background
                layout="prev, pager, next"
                :total="itemLst.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentPage:1,
            navList: ["序号","作品名称","作者","购买时间","购买价格","持有(画作/版权)","状态","操作","详情"],
            itemLst: [{
                xuhao:'01',
                name: '《清明上河图》',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '交易中',
                se: 'jiaoyizhong'
            },{
                xuhao:'02',
                name: '《蒙娜丽莎》',
                zuozhe: '达芬奇',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '已售出',
                se: 'yishouchu'
            },{
                xuhao:'03',
                name: '《富春山居》',
                zuozhe: '不认识',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'04',
                name: '《马踏飞燕》',
                zuozhe: '认不得',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'05',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku',
            },{
                xuhao:'06',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'07',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'08',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'09',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            },{
                xuhao:'10',
                name: '清明上河图',
                zuozhe: '张先',
                time: '2018-01-12',
                cny: '300万',
                chiyou: '画作持有',
                zhuangtai: '仓库',
                se: 'cangku'
            }]
        }
    },
    methods: {
        handleCurrentChange(val){
            this.currentPage = val
        },
    },
}
</script>

<style scoped>
.list-right{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.list-right-top{
    width: 100%;
    height: 30px;
    margin-bottom: 4px;
    display: flex;
    flex-wrap: nowrap;
    padding-right: 6px;
}
.list-right-top>div{
    flex-grow: 0;
    font-size: 12px;
    text-align: center;
    padding-top: 10px;
    color: #6b6b6b;
}
.list-right-top>div:nth-child(1),
.list-right-top>div:nth-child(3){
    width: 6%;
}
.list-right-top>div:nth-child(6){
    width: 12%;
}
.list-right-top>div:nth-child(2){
    width: 21%;
}
.list-right-top>div:nth-child(4){
    width: 15%;
}
.list-right-top>div:nth-child(5){
    width: 16%;
}
.list-right-top>div:nth-child(7),
.list-right-top>div:nth-child(8){
    width: 6%;
}
.list-right-top>div:nth-child(9){
    width: 12%;
}


.list-right-bottom{
    width: 100%;
    flex: 1;
    position: relative
}
.list-right-bottom-c{
    width: 100%;
    height: 40px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
    display: flex;
    flex-wrap: nowrap;
    padding-right: 6px;
    margin-bottom: 1px;
}
.list-right-bottom-c>div{
    flex-grow: 0;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
}
.list-right-bottom-c>div:nth-child(1),
.list-right-bottom-c>div:nth-child(3){
    width: 6%;
}
.list-right-bottom-c>div:nth-child(6){
    width: 12%;
}
.list-right-bottom-c>div:nth-child(2){
    width: 21%;
    color: #409eff;
}
.list-right-bottom-c>div:nth-child(4){
    width: 15%;
}
.list-right-bottom-c>div:nth-child(5){
    width: 16%;
}
.list-right-bottom-c>div:nth-child(7),
.list-right-bottom-c>div:nth-child(8){
    width: 6%;
}
.list-right-bottom-c>div:nth-child(8)>i{
    cursor: pointer;
}
.list-right-bottom-c>div:nth-child(9){
    width: 12%;
}
.list-right-bottom-c>div:nth-child(9) span{
    border: 0;
    padding: 4px 20px;
    font-size: 12px;
    color: #fff;
    background: #409eff;
    cursor: pointer;
    border-radius: 3px;
    margin: 0 auto
}
.jiaoyizhong{
    color: #6cc800;
    font-weight: bold
}
.yishouchu{
    color: #c80000;
    font-weight: bold
}
.cangku{
    color: #ccc;
}
.fenye{
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>