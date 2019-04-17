<template>
    <div class="h-exhibition-left">
        <div class="h-exhibition-left-t">
            <span>国手上线</span>
            <span>详细信息>></span>
        </div>
        <div class="h-exhibition-left-img">
            <img src="../../../../statics/img/h-g-img.png" alt="">
            <div class="h-exhibition-left-img-j">
                <div class="h-j-top">
                    流溪听静风
                    <img src="../../../../statics/img/zhenpin.png" alt="">
                </div>
                <div class="h-j-text">由著名画家齐白石于八九年4月份所作，具有非常高的艺术价值。</div>
                <div class="h-j-qj">
                    <span>起链价 :</span>
                    6000元
                </div>
                <div class="h-j-text" style='margin-top:4px'>经 <span>21</span> 位收藏家竞价</div>
                <div class="h-j-qj" style='color:#f00'>
                    <span>现价 :</span>
                    14258元
                </div>
                <div class="h-j-text" style='margin-top:6px'>距中止时间 :<span style='color:#15cd19'> 128时</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeLeft',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.h-exhibition-left{
    width: 660px;
    height: 100%;
    margin-right: 18px;
}
.h-exhibition-left-t{
    width: 100%;
    height: 20px;
}
.h-exhibition-left-t span:nth-child(1){
    display: inline-block;
    font: 600 14px/20px "微软雅黑";
} 
.h-exhibition-left-t span:nth-child(2){
    display: inline-block;
    float: right;
    font: 100 12px/22px "微软雅黑";
    cursor: pointer;
} 
.h-exhibition-left-img{
    width: 100%;
    height: calc( 100% - 26px );
    background: #fff;
    margin-top: 4px;
    padding: 10px;
    position: relative;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
}
.h-exhibition-left-img img{
    width: 100%;
    height: 100%;
}
.h-exhibition-left-img-j{
    position: absolute;
    width: 158px;
    height: 198px;
    right: 60px;
    top: 34px;
    background: #fff;
    padding: 18px 17px;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .3);
    cursor: pointer;
}
.h-exhibition-left-img-j:hover{
    box-shadow: 1px 1px 18px rgba(0, 0, 0, .4);
}
.h-j-top{
    display: block;
    font: 600 16px/16px "微软雅黑";
    color: #4a4a4a;
    white-space:nowrap; 
    text-overflow:ellipsis; 
    -o-text-overflow:ellipsis; 
    overflow: hidden;
}
.h-j-top>img{
    display: block;
    width: 28px;
    height: 28px;
    position: absolute;
    top: 13px;
    right: 17px;
}
.h-j-text{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font: 100 12px/18px "微软雅黑";
    margin-top: 10px;
    color: #989898;
}
.h-j-qj{
    width: 100%;
    height: 20px;
    font-weight: bold;
    color: #ff8400;
    font-size: 18px;
    font-family: "微软雅黑";
}
.h-j-qj span{
    font: 100 12px/12px "微软雅黑";
    color: #989898;
}
.h-j-text span{
    font-weight: 900;
    color: #f00;
}
</style>