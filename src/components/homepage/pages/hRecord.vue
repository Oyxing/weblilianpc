<template>
    <div class="center-c-right">
        <div class="center-c-right-title">我的足迹</div>
        <div class="top">
            <el-date-picker
                class="time"
                v-model="value3"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
            <div class="top-sousuo">点击搜索</div>
        </div>
        <div class="f-srcoll">
            <div class="jilu" v-for="(item,index) in zuoList" :key="index">
                <div class="jilu-time">
                    <i class="iconfont icon-shijian"></i>
                    <span>{{item.time}}</span>
                    <span>{{item.shijian}}</span>
                </div>
                <div class="jilu-zuji" v-for="(item1,index1) in item.zuoPinLst" :key="index1">
                    <div><img :src="item1.src" alt=""></div>
                    <div><span>{{item1.type}}</span></div>
                    <div>{{item1.name}}</div>
                    <div>起链价：<span>{{item1.cny1}}</span></div>
                    <div>{{item1.zhuangtai}}</div>
                    <div>售出价：<span>{{item1.cny2}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input: '',
            value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            zuoList: [{
                time: '2019-01-15',
                shijian: '4:05',
                zuoPinLst: [{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                }]
            },{
                time: '2019-01-16',
                shijian: '14:05',
                zuoPinLst: [{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                },{
                    src: '/statics/img/002.jpg',
                    type: '国画',
                    name: '《富春山居图》',
                    cny1: '300万',
                    zhuangtai: '已售出',
                    cny2: '800万'
                }]
            }]
        }
    }
}
</script>

<style scoped>
.center-c-right{
    flex: 1;
    margin-left: 60px;
}
.center-c-right-title{
    font-size: 14px;
    font-weight: bold;
}
.wodezuji{
    height: 500px;
    background: #fff;
    margin-top: 10px;
}
.top{
    padding: 20px;
    background: #fff;
    margin-top: 10px;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
    display: flex;
    font-size: 14px;
}
.top>.time{
    flex-grow: 0;
    width: 420px !important;
}

.jilu{
    padding: 0 20px 20px 20px;
    background: #fff;
}
.jilu-time{
    padding: 6px;
    background: #f6f6f6;
    font-size: 12px;
}
.jilu-time i{
    font-size: 14px;
    margin-right: 10px;
}
.jilu-time span{
    margin-right: 10px;
}
.jilu-zuji{
    width: 100%;
    display: flex;
    margin-top: 10px;
}
.jilu-zuji:hover{
    background: #fff6f6;
}
.jilu-zuji div:nth-child(1){
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: #000;
    overflow: hidden;
}
.jilu-zuji div:nth-child(1) img{
    width: 100%;
    height: 100%;
}
.jilu-zuji div:nth-child(2){
    position: relative;
    height: 40px;
    width: 130px;
}
.jilu-zuji div:nth-child(2) span{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    display: block;
    width: 40px;
    height: 18px;
    background: #cf0000;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    border-radius: 2px;
}
.jilu-zuji div:nth-child(3){
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    width: 200px;
}
.jilu-zuji div:nth-child(4){
    font-size: 14px;
    line-height: 40px;
    width: 200px;
    text-align: center
}
.jilu-zuji div:nth-child(4) span{
    color: #00cd76;
}
.jilu-zuji div:nth-child(5){
    font-size: 14px;
    line-height: 40px;
    width: 130px;
    text-align: center;
    color: #ccc;
}
.jilu-zuji div:nth-child(6){
    font-size: 14px;
    line-height: 40px;
    width: 130px;
    text-align: center
}
.jilu-zuji div:nth-child(6) span{
    color: #cd0000;
}


.f-srcoll{
    background: #ccc;
    height: 470px;
    overflow-y: scroll;
}

.top-sousuo{
    width: 130px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    margin-left: 20px;
    background: #409eff;
    color: #fff;
    cursor: pointer;
    float: right;
}
.top-sousuo:hover{
    background: #2088f4;
}
</style>