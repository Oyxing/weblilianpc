<template>
    <div class="tr-top">
        <el-select style='margin-right:10px;' v-model="value" clearable placeholder="全部">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select style='margin-right:40px;' v-model="value" clearable placeholder="不限">
            <el-option
            v-for="item in optionss"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="开始日期"
        >
        </el-date-picker>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="结束日期"
        >
        </el-date-picker>
        <el-button type="primary" class="hello">搜索</el-button>
    </div>
</template>

<script>
export default {
    name: 'TrTop',
    data(){
        return{
            options: [{
                value: '选项1',
                label: '文玩'
                }, {
                value: '选项2',
                label: '古董'
                }, {
                value: '选项3',
                label: '西汉木艺'
                }, {
                value: '选项4',
                label: '大明王朝'
                }, {
                value: '选项5',
                label: '张大千的画'
            }],
            optionss: [{
                value: '选项1',
                label: '文玩'
                }, {
                value: '选项2',
                label: '古董'
                }, {
                value: '选项3',
                label: '西汉木艺'
                }, {
                value: '选项4',
                label: '大明王朝'
                }, {
                value: '选项5',
                label: '张大千的画'
            }],
            value: '',
            value6: '',
            value1: ''
            }
    }
}
</script>

<style scoped>
.tr-top{
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
}
.hello{
    padding: 15px 30px !important;
}
</style>