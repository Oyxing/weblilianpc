<template>
    <div class="h-attention">
        <div class="h-attention-left">
            <div class="h-attention-a">
                <i class="iconfont icon-like_fill h-icon" style='margin-left:48px;'></i>
                <span class="h-span" style='text-align:left;'>我的关注</span>
            </div>
            <div class="h-attention-s">
                <i class="iconfont icon-activity_fill h-icon"></i>
                <span class="h-span">最新作品</span>
            </div>
            <div class="h-attention-s">
                <i class="iconfont icon-dynamic_fill h-icon"></i>
                <span class="h-span">大额交易</span>
            </div>
            <div class="h-attention-s">
                <i class="iconfont icon-praise_fill h-icon"></i>
                <span class="h-span">名家点评</span>
            </div>
        </div>
        <div class="h-attention-right">
            <img src="../../../statics/img/h_shuju.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'HAttention',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.h-attention{
    width: 100%;
    height: 106px;
    margin-top: 18px;
    display: flex;
}
.h-attention-left{
    flex: 1;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    padding: 16px 20px 16px 16px;
    display: flex;
}
.h-attention-a{
    width: 200px;
    height: 100%;
    background: #518df2;
    margin-right: 20px;
    text-align: center;
    line-height: 74px;
    display: flex;
    cursor: pointer;
}
.h-attention-a:hover{
    background: #4782e7;
}
.h-attention-s{
    width: 147px;
    height: 100%;
    background: #ffb75b;
    margin-left: 14px;
    line-height: 74px;
    display: flex;
    cursor: pointer;
}
.h-attention-s:hover{
    background: #fbaf4d;
}
.h-icon{
    color: #fff;
    font-size: 32px;
    display: block;
    margin: 0 6px 0 24px;
}
.h-span{
    font-size: 14px;
    color: #fff;
    font-family: "微软雅黑";
    flex: 1;
    font-weight: bold;
}
.h-attention-right{
    width: 400px;
    height: 106px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    margin-left: 18px;
    padding: 14px;
}
.h-attention-right img{
    width: 100%;
    height: 100%;
}
</style>