<template>
    <div class="center-top">
        <div style='display:flex; flex:1;'>
            <div class="input">
            <span>关键词：</span>
            <input v-model="input" placeholder="请输入内容">
        </div>
        <el-select v-model="value" placeholder="">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="value3" style='margin-left: 10px' disabled='disabled' placeholder="">
            <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        </div>
        <el-button style='margin-right: 0' type="primary"><router-link to="/chuangjianjiaoyi" style='color:#fff'>发布交易</router-link></el-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            options: [{
                value: '1',
                label: '全部'
            },{
                value: '2',
                label: '已上架'
            },{
                value: '3',
                label: '审核中'
            }],
            options1: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }],
            value3: '审核状态',
            value: '全部',
            input: '',
        }
    }
}
</script>

<style scoped>
.center-top{
    margin-top: 14px;
    padding: 10px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
    padding: 20px;
    display: flex;
}
.input{
    display: flex;
    line-height: 26px;
    font-size: 14px;
}
.input span{
    padding-top:4px;
}
.input input{
    line-height: 26px;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    margin-right: 10px;
    text-indent: 10px;
}
</style>