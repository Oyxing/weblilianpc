<template>
    <div class="center-c-right">
        <div class="center-c-right-q">
            您的账户当前余额为 : &nbsp;&nbsp;&nbsp;
            <span><i class="iconfont icon-renminbi1"></i>{{sum}}</span>
            <el-button style='float:right; margin: 16px 40px 0 0' type="primary" icon="el-icon-setting">钱包设置</el-button>
            <el-button style='float:right; margin: 16px 6px 0 0' icon="el-icon-sort" type="success" @click="dialogVisible = true">转账</el-button>
            <el-dialog
                title="发送转账"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                :show-close="false"
            >
                <div class="c-title">请输入对方钱包地址及转账金额</div>
                <div class="dialog-from">
                    <input type="text" v-model="form.toaddress" placeholder="请输入对方账户地址 ( 请确认无误，该操作不可撤销！)">
                </div>
                <div class="dialog-from">
                    <input type="text" v-model="form.money" placeholder="请输入转账金额">
                </div>
                <div class="c-maney">
                    <span>您所剩余额:</span>&nbsp;&nbsp;
                    <span>{{sum - form.money}}</span>
                </div>
                <div class="dialog-from">
                    <input type="text" v-model="form.text" placeholder="请填写备注信息，不超过60字符">
                </div>
                <div class="dialog-from">
                    <input type="passwrod" v-model="form.paw" placeholder="请输入交易密码">
                </div>
                <div slot="footer" class="dialog-footer c-btn0">
                    <el-button class="c-btn1" @click="dialogVisible = false">取 消</el-button>
                    <el-button class="c-btn2" type="primary" @click="gettransaction">交易</el-button>
                </div>
            </el-dialog>
        </div>
        <div class="center-c-right-pass">
            账户地址 : &nbsp;&nbsp;&nbsp;
            <span v-text="message"></span>
            <el-button
                class='btn' 
                v-clipboard:copy="message"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
            >
                点击复制
            </el-button>
        </div>
        <div class="center-c-right-w">
            <div class="center-c-right-w-b">我的交易信息</div>
        </div>
        <div class="center-c-right-f">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 全部交易</span>
                    <table class="c-table">
                        <tr>
                            <td v-for='item in navList' :key='item.index'>{{ item.name }}</td>
                        </tr>
                        <tr v-for='item in biaoList.slice((currentPage-1)*6,currentPage*6)' :key='item.index'>
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
                    <div style='margin: 0 0 26px 29px;'>
                        <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="6"
                            background
                            layout="prev, pager, next"
                            :total="biaoList.length">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="支出">支出</el-tab-pane>
                <el-tab-pane label="收入">收入</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import acction from '../../../statics/js/acction.js'

export default {
    name: 'HRight',
    data(){
        return{
            sum:1247.65,
            form:{
                toaddress:"0x3c5fbc03184596f7d6775fbaa273c70056d56684",
                money:10,
                text:"asda",
                paw:"oyxing"
            },
            dialogVisible: false,
            message: '',
            currentPage:1,
            navList:[
                {
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
                }
            ],
            biaoList:[
                {
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
                }
          ]
        }
    },
    created() {
        var address = this.addressArr[0].address
        this.message = this.addressArr[0].address.slice(2,address.length)
          
        acction.getBalance({_this:this,address:address}).then((balance) => {
            this.sum = balance
        }).catch((err) => {
        });
    },
    methods: {
                //交易
        gettransaction(){
            this.dialogVisible = false
            this.form["_this"]=this
            this.form["datastr"] = {text :this.form.text}
            acction.signTransaction(this.form).then((result) => {
               if(result.err == null){
                   alert("交易成功")
               }
            }).catch((err) => {
                console.log('err') 
               console.log(err) 
            });
         
        },

        onCopy(e) {
            this.$notify({
                title: '成功',
                message: e.text,
                type: 'success'
            })
        },
        handleCurrentChange(val){
            this.currentPage = val
        },
        onError: function (e) {
            alert('Failed to copy texts')
        },
        
        handleClose(done) {
            done();
        }
    },
    computed: {
        addressArr:{
            get(){
                return this.$store.state.example.addressArr
            },
            set(){
                return this.$store.state.example.addressArr
            }
        }
    },
}
</script>

<style scoped>
.center-c-right{
    flex: 1;
    margin-left: 60px;
}
.center-c-right-q{
    line-height: 60px;
    font-size: 16px;
    font-family: '微软雅黑';
}
.center-c-right-q span{
    color: #ffac52;
    font-size: 26px;
    font-weight: bold;
}
.center-c-right-q span i{
    font-size: 20px;
    font-weight: 100;
}
.center-c-right-pass{
    font-size: 16px;
    font-family: "微软雅黑";
}
.center-c-right-pass span{
    color: #518df2;
}
.btn{
    margin-left: 30px;
    height: 26px;
}
.center-c-right-w{
    width: 100%;
    margin-bottom: 18px;
}
.center-c-right-w-b{
    width: 100%;
    height: 20px;
    line-height: 18px;
    font-size: 16px;
    border-left: 3px solid #ffac52;
    text-indent: 20px;
    font-family: "微软雅黑";
    margin-top: 40px;
}
.center-c-right-f{
    width: 100%;
    padding-right: 40px;
}

.c-table{
    width: 100%;
    padding: 20px 16px 8px 20px;
}

.c-table tr td{
    width: 80px;
    height: 36px;
    font: 100 14px/26px "微软雅黑";
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
}
.c-table tr:hover{
    background: #f9fbff;
    cursor: pointer;
}
.c-table tr td:nth-child(1){
    padding-left: 10px;
}
.c-table tr td:nth-child(4){
    font-weight: bold;
    color: #fda700;
}
.c-table tr td:nth-last-child(2){
    font-weight: bold;
    color: #f00;
}
.c-table tr:first-child td{
    font: 600 12px/20px "微软雅黑";
    color: #bdbdbd;
    border: 0;
}
.c-title{
    text-align:center;
    margin: 20px 0 15px 0;
    font-size:16px;
    height: 30px;
    line-height: 30px;
}
.c-maney{
    width: 100%;
    height: 28px;
    line-height: 28px;
}
.c-maney span:nth-child(1){
    font: 100 12px/14px "微软雅黑";
    color: #ccc;
}
.c-maney span:nth-child(2){
    font: 600 14px/14px "微软雅黑";
    color: #f00;
}
.c-btn0{
    margin-top: 20px !important;
}
.c-btn1{
    width: 100px;
    height: 36px;
    background: #e4e4e4;
    border: 1px solid #d9d9d9;
}
.c-btn2{
    width: 100px;
    height: 36px;
    background: #409EFF;;
    border: 1px solid #2892ff;
}
</style>