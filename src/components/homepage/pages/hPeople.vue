<template>
    <div class="center-c-right">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item class="left" :to="{ path: '' }">交易管理</el-breadcrumb-item>
            <el-breadcrumb-item>作品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <hp-top></hp-top>
        <div class="list xiala">
            <hp-center></hp-center>
            <hp-right></hp-right>
        </div>
    </div>
</template>

<script>
import HpTop from './hPeople/top.vue'
import HpCenter from './hPeople/center.vue'
import HpRight from './hPeople/right.vue'
import { setServers } from 'dns'
import { setTimeout } from 'timers'

export default {
    components: {
        HpTop,
        HpCenter,
        HpRight
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.center-c-right{
    flex: 1;
    margin-left: 60px;
}
.list{
    width: 100%;
    display: flex;
    margin-top: 26px;
    position: relative;
}



</style>