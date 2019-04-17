<template>
    <div class="d-emphasize" style='height:310px;'>
        <div class="d-emphasize-left" style='height:100%;'>
            <i class="iconfont icon-dakashike" style='margin-top:120px;background:#ffc000'></i>
            <span>热门交易</span>
        </div>
        <div class="d-emphasize-right tablebox" style='height:100%;padding:6px 22px 22px 22px'>
            <el-tabs v-model="activeName" style='width:100%'>
                <el-tab-pane label="工笔国画" name="first" class="d-hello">
                    <div class="d-biaoge">
                        <table>
                            <tr>
                                <td v-for='item in navList' :key='item.index'>{{ item.name }}</td>
                            </tr>
                            <tr v-for='item in biaoList' :key='item.index'>
                                <td>
                                    <div class="d-one" :class="item.label">{{ item.type }}</div>
                                </td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.author }}</td>
                                <td>{{ item.starting }}</td>
                                <td>{{ item.man }}</td>
                                <td>{{ item.now }}</td>
                                <td>{{ item.time }}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="border-right:1px solid #e3e3e3; margin: 0 26px;"></div>
                    <div class="d-biaoge">
                        <table>
                            <tr>
                                <td v-for='(item,index) in navList' :key='index'>{{ item.name }}</td>
                            </tr>
                            <tr v-for='item in biaoList' :key='item.index'>
                                <td>
                                    <div class="d-one" :class="item.label">{{ item.type }}</div>
                                </td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.author }}</td>
                                <td>{{ item.starting }}</td>
                                <td>{{ item.man }}</td>
                                <td>{{ item.now }}</td>
                                <td>{{ item.time }}</td>
                            </tr>
                        </table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="水墨画" name="second" class="d-hello">水墨画</el-tab-pane>
                <el-tab-pane label="印象派" name="third" class="d-hello">印象派</el-tab-pane>
                <el-tab-pane label="书法" name="fourth" class="d-hello">书法</el-tab-pane>
            </el-tabs>
            <div class="d-suoyou">添加类型</div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'DBottom',
    data(){
        return{
            activeName: 'first',
            navList:[{
                name: "类型"
            },{
                name: "作者"
            },{
                name: "名称"
            },{
                name: "起价"
            },{
                name: "经手人"
            },{
                name: "现价"
            },{
                name: "剩余时长"
            }],
            biaoList:[{
                label: 'one',
                id: '001',
                type: '国画',
                name: '十咏图',
                author: '张先',
                starting: '460万',
                man: '36',
                now: '940万',
                time: '114H'
            },{
                label: 'two',
                id: '002',
                type: '国画',
                name: '十咏图',
                author: '张先',
                starting: '460万',
                man: '36',
                now: '940万',
                time: '114H'
            },{
                label: 'three',
                id: '003',
                type: '国画',
                name: '十咏图',
                author: '张先',
                starting: '460万',
                man: '36',
                now: '940万',
                time: '114H'
            },{
                label: 'four',
                id: '004',
                type: '国画',
                name: '十咏图',
                author: '张先',
                starting: '460万',
                man: '36',
                now: '940万',
                time: '114H'
            },{
                label: 'five',
                id: '005',
                type: '国画',
                name: '十咏图',
                author: '张先',
                starting: '460万',
                man: '36',
                now: '940万',
                time: '114H'
            }],
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

.d-emphasize-right .el-tabs__nav is-top .el-tabs__item{
    height: 38px !important;
}
.d-suoyou{
    width: 70px;
    height: 30px;
    border-radius: 4px;
    background: #ccc;
    color: #fff;
    position: absolute;
    right: 22px;
    top: 10px;
    cursor: pointer;
    font: 100 12px/30px "微软雅黑";
    text-align: center;
}
.d-hello{
    width: 100%;
    display: flex
}
.d-hello-left{
    width: 500px;
    background: #fff;
}
.d-hello-right{
    width: 500px;
    background: #f00;
}

.d-biaoge{
    width: 50%;
    height: 228px;
}
.d-biaoge table tr td{
    width: 80px;
    height: 36px;
    font: 100 14px/26px "微软雅黑";
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
}
.d-biaoge table tr td:nth-child(4){
    font-weight: bold;
    color: #fda700;
}
.d-biaoge table tr td:nth-last-child(2){
    font-weight: bold;
    color: #f00;
}
.d-biaoge table tr:first-child td{
    font: 600 12px/20px "微软雅黑";
    color: #bdbdbd;
    border: 0;
}
.d-one{
    width: 50px;
    height: 24px;
    text-align: center;
    font: 100 12px/26px "微软雅黑";
    color: #fff;
    border-radius: 3px;
    margin: 0 auto;
    background: #ccc
}
.one{
    background: #518df2;
}
.two{
    background: #ff940a;
}
.three{
    background: #59e75c;
}
.four{
    background: #a7a7a7;
}
.five{
    background: #93bbff;
}
</style>