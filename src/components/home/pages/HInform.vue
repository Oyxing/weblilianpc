<template>
    <div class="h-inform">
        <i class="iconfont icon-tongzhi1"></i>
        <div>您的发链作品已经过 <span style='color:#ffaa05'>5</span> 个收藏家出价，现在竞拍价格提升为 <span>52413.36</span> 元，距离竞拍结束还有 <span style='color:#15cd19'>158</span> 小时。【<a href="javascript:;">点击查看</a>】</div>
    </div>
</template>

<script>
export default {
    name: 'HInfrom',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.h-inform{
    width: 100%;
    height: 38px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    margin-top: 18px;
    padding: 7px 14px;
    display: flex;
}
.h-inform>.iconfont{
    display: block;
    font: 100 24px/24px "微软雅黑";
    color: #f79358;
    margin-right: 10px;
}
.h-inform>div{
    flex: 1;
    font: 100 14px/26px "微软雅黑";
    color: #989898;
}
.h-inform>div span{
    color: #f00;
    font-weight: bold;
}
.h-inform>div a{
    color:#518df2;
}
</style>