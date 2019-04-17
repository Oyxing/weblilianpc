<template>
    <div class="h-exhibition-right">
        <div class="h-exhibition-left-t">
            <span>最新交易</span>
            <span>更多>></span>
        </div>
        <div class="h-exhibition-left-img tablebox">
            <el-table :data="tableData" style="width: 100%;margin-top:4px">
                <el-table-column prop="date" label="作品类型">
                    <template slot-scope="scope">
                        <el-button size="mini" :row="scope.row" class="h-biao hei">国画</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="名称"></el-table-column>
                <el-table-column prop="address" label="作者"></el-table-column>
                <el-table-column prop="money" label="起售价"></el-table-column>
                <el-table-column prop="people" label="经手人数"></el-table-column>
                <el-table-column prop="money1" label="当前价"></el-table-column>
                <el-table-column prop="time" label="剩余时长"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeRight',
    data(){
        return{
            tableData: [{
                date: '2016-05-02',
                name: '十咏图',
                address: '北宋张先',
                money: '560万',
                people: '36',
                money1: '760万',
                time: '124H'
            }, {
                date: '2016-05-02',
                name: '十咏图',
                address: '北宋张先',
                money: '560万',
                people: '36',
                money1: '760万',
                time: '124H'
            }, {
                date: '2016-05-02',
                name: '十咏图',
                address: '北宋张先',
                money: '560万',
                people: '36',
                money1: '760万',
                time: '124H'
            }, {
                date: '2016-05-02',
                name: '十咏图',
                address: '北宋张先',
                money: '560万',
                people: '36',
                money1: '760万',
                time: '124H'
            }, {
                date: '2016-05-02',
                name: '十咏图',
                address: '北宋张先',
                money: '560万',
                people: '36',
                money1: '760万',
                time: '124H'
            }]
        }
    }
}
</script>

<style scoped>
.h-exhibition-right{
    flex: 1;
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
.h-biao{
    background: #518df2;
    color: #fff;
}
.hei{
    padding: 12px 20px !important;
}
</style>