<template>
    <div class="shenhe">
        <div>
            <img src="../../statics/img/shenhe.png" alt="">
        </div>
        <div>我们将会在72小时内审核结束，到时候会通知到您，请您耐心等待……</div>
        <div @click="chanpingleibiao">返回作品列表页</div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        chanpingleibiao(){
            this.$router.push({path:'/homepage/h_people'})
        }
    },
}
</script>

<style scoped>
    .shenhe{
        text-align: center;
    }
    .shenhe div:nth-child(1){
        width: 10%;
        padding-top: 140px;
        margin: 0 auto;
    }
    .shenhe div:nth-child(1) img{
        width: 100%
    }
    .shenhe div:nth-child(2){
        font-size: 14px;
        text-align: center;
        color: #848484;
        margin-top: 20px;
    }
    .shenhe div:nth-child(3){
        width: 130px;
        height: 36px;
        background: #1192ff;
        border-radius: 4px;
        margin: 30px auto 0 auto;
        line-height: 36px;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
    }
</style>