<template>
    <div class="d-emphasize">
        <div class="d-emphasize-left">
            <i class="iconfont icon-dakashike"></i>
            <span>重点推荐</span>
        </div>
        <div class="d-emphasize-right">
            <div class="d-emphasize-right-f">
                <div class="gun">
                    <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
                    <img src="../../../statics/img/d-gun.png" alt="">
                </div>
            </div>
            <div class="d-tou">
                <div><img src="../../../statics/img/d-zhangzerui.png" alt=""></div>
                <div>北宋-张择瑞</div>
                <div>清明上河图</div>
                <div><span>张择端</span>，字正道，汉族，琅琊东武（今山东诸城）人，居住于东京（今河南开封）北宋画家。</div>
            </div>
            <div class="d-hua">
                <img src="../../../statics/img/d-qinmingshanghetu.png" alt="">
            </div>
            <div class="d-kxian">
                <img src="../../../statics/img/d-kxian.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DEmphasize',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.d-emphasize{
    width: 100%;
    height: 200px;
    margin-top: 20px;
    display: flex;
}
.d-emphasize-left{
    width: 102px;
    height: 200px;
    margin-right: 20px;
}
.d-emphasize-left i{
    width: 38px;
    height: 38px;
    display: block;
    text-align: center;
    line-height: 38px;
    font-size: 20px;
    color: #fff;
    background: #518df2;
    border-radius: 50%;
    margin: 70px auto 4px auto;
}
.d-emphasize-left span{
    display: block;
    text-align: center;
    font-size: 14px;
    color: #6b6b6b;
    font-family: "微软雅黑"
}
.d-emphasize-right{
    flex: 1;
    height: 200px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    margin-right: 10px;
    position: relative;
    padding: 22px 36px 22px 22px;
    display: flex;
}
.d-emphasize-right-f{
    width: 36px;
    height: 36px;
    position: absolute;
    top: 20px;
    right: -7px;
}
.gun{
    background:#6b8ef3;
    width:100%;
    height:30px;
    position: relative;
    font: 100 16px/30px "";
    color: #fff;
    text-align: center;
    cursor: pointer;
}
.gun img{
    position: absolute;
    bottom: -7px;
    right: 0;
}
.gun:hover{
    background: #5177e4;
}
.d-tou{
    width: 170px;
    height: 156px;
    margin-right: 26px;
}
.d-tou div:nth-child(1){
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px 0;
}
.d-tou div:nth-child(1) img{
    width: 100%;
}
.d-tou div:nth-child(2){
    font: 100 12px/12px "微软雅黑";
    margin-bottom: 6px;
}
.d-tou div:nth-child(3){
    font: 600 14px/14px "微软雅黑";
    margin-bottom: 6px;
}
.d-tou div:nth-child(4){
    font: 100 12px/18px "微软雅黑";
    margin-bottom: 10px;
}
.d-tou div:nth-child(4) span{
    font-weight: bold;
}
.d-hua{
    width: 460px;
    height: 100%;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    padding: 6px;
    overflow: hidden;
    cursor: pointer;
    margin-right: 20px;
}
.d-hua img{
    width: 100%;
    height: 100%;
}
.d-hua:hover{
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .4);
}
.d-kxian{
    height: 100%;
    flex: 1;
    background: #ccc;
}
.d-kxian img{
    width: 100%;
    height: 100%;
}
</style>