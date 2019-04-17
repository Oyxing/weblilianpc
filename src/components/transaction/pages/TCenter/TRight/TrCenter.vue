<template>
    <div class="tr-center">
        <div class="tr-center-c">
            <div class="tr-center-c-item" v-for='(item,index) in imgList.slice((currentPage-1)*10,currentPage*10)' :key='index'>
                <div class="tr-center-c-item-img">
                    <img :src="item.src1" alt="">
                </div>
                <div class="tr-center-c-item-title">
                    <div>{{ item.title }}</div>
                    <span>{{ item.author }}</span>
                </div>
                <img class="tr-f-img" :src="item.scr2" alt="">
            </div>
        </div>
        <div class="tr-center-fen">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="10"
                background
                layout="prev, pager, next"
                :total="imgList.length">
            </el-pagination> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrCenter',
    data(){
        return{
            currentPage:1,
            imgList: [{
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/003.jpg',
                title: '青铜俑',
                author: '秦始皇',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/004.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/wancheng.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }, {
                src1: '/statics/img/002.jpg',
                title: '马踏飞燕马踏飞燕马踏飞燕马踏飞燕马踏飞燕',
                author: '不认识',
                scr2: '/statics/img/zhengzai.png'
            }]
        }
    },
    methods: {
        handleCurrentChange(val){
            this.currentPage = val
        }
    }
}
</script>

<style scoped>

.tr-center-c>div:nth-child(5),
.tr-center-c>div:nth-child(10)
{
    margin: 0 0 19px 0;
}


.tr-center{
    width: 100%;
    height:calc( 100vh - 240px);
    margin-top: 20px;
}
.tr-center-c{
    height: calc( 100vh - 296px);
    width: 100%;
}
.tr-center-c-item{
    width: 153px;
    height: 196px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    padding: 6px;
    margin: 0 20px 20px 0;
    float: left;
    position: relative;
    cursor: pointer;
}
.tr-center-c-item:hover{
    box-shadow: 2px 2px 20px rgba(166, 166, 166, .6);
}
.tr-f-img{
    position: absolute;
    right: 8px;
    bottom: 8px;
}
.tr-center-c-item-img{
    width: 100%;
    height: 130px;
    background: #ccc;
    overflow: hidden;
}
.tr-center-c-item-img img{
    width: 100%;
}
.tr-center-c-item-title{
    width: 100%;
    margin-top: 10px;
    padding: 0 4px;
}
.tr-center-c-item-title>div{
    width: 100px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font: 600 14px/14px "微软雅黑";
    color: #404040;
}
.tr-center-c-item-title>span{
    font: 100 12px/14px "微软雅黑";
    color: #aaaaaa;
}
.tr-center-fen{
    margin-top: 32px;
}
</style>