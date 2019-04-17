<template>
    <div class="h-user">
        <div class="h-user-portrait">
            <img src="../../../statics/img/header.png"  @click='homepage' alt="">
        </div>
        <div class="h-user-intro">
            <span class="h-user-intro-name" @click='homepage' >张大千,早上好~</span>
            <span class="h-user-intro-j">游历世界，获得巨大的国际声誉，被西方艺坛赞为“东方之笔”。</span>
            <span class="h-user-intro-j">国家S级画家</span>
        </div>
        <div class="h-user-money">
            <div>201476.38</div>
            <span>交易（人民币）</span>
        </div>
        <div class="h-user-money">
            <div style='color:#ff050b'>102566.00</div>
            <span>交易（人民币）</span>
        </div>
        <div class="h-user-money">
            <div style='color:#ffaa05'>95463.38</div>
            <span>交易（人民币）</span>
        </div>
        <div class="h-user-btn">
            <router-link to='chuangjianjiaoyi'>发布交易</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HHeader',
    data(){
        return{
            
        }
    },
    methods: {
        homepage(){
            this.$router.push({
                path: '/homepage'
            })
        }
    },
}
</script>

<style scoped>
.h-user{
    width: 100%;
    height: 92px;
    background: #fff;
    padding: 16px;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    display: flex;
}
.h-user-portrait{
    width: 64px;
    height: 64px;
    background: #ccc;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
    cursor: pointer;
}
.h-user-portrait:hover{
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
}
.h-user-portrait img{
    width: 100%;
}
.h-user-intro{
    flex: 1;
}
.h-user-intro-name{
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    display: block;
    margin-top: 4px;
    font-family: "微软雅黑";
}
.h-user-intro-name:hover{
    text-decoration:underline;
    cursor: pointer;
}
.h-user-intro-j{
    font-size: 12px;
    color: #b1b1b1;
    display: block;
    margin-top: 2px;
    font-family: "微软雅黑"
}
.h-user-money{
    width: 152px;
    height: 90%;
    border-left: 1px solid #ebebeb;
    margin-top: 3px;
}
.h-user-btn{
    width: 120px;
    height: 40px;
    text-align: center;
    font: 100 14px/40px "微软雅黑";
    color: #fff;
    background: #518df2;
    margin: 10px 12px 0 20px;
    border-radius: 3px;
    cursor: pointer;
}
.h-user-btn a{
    color: #fff;
}
.h-user-money>div{
    text-align: center;
    font: 600 20px/32px "微软雅黑";
    color: #15cd19;
}
.h-user-money>span{
    display: block;
    text-align: center;
    font: 100 12px/18px "微软雅黑";
    color: #b1b1b1;
}
</style>
