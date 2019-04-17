<template>
    <div class="center-c-right">
        <div class="center-c-right-title">帐号设置</div>
        
        <div class="changpingxinxi-tian">
            <span>艺链账户：</span>
            <div>13888888888</div>
            <div class="zhanghao">不可修改</div>
        </div>

        <div class="changpingxinxi-tian">
            <span>账户密码：</span>
            <div>**********</div>
            <div class="xiugaimima" @click="dialogFormVisible = true">点击修改</div>
            <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="请输入密码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="请再次输入密码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <div class="changpingxinxi-tian">
            <span style="font-weight: bold;color:#f00">钱包账户：</span>
            <div class="xiugaimima" style='margin-left:0' @click="dialogFormVisible1 = true">{{msg}}</div>
            <el-dialog title="设置交易密码" :visible.sync="dialogFormVisible1">
                <el-form :model="form">
                    <el-form-item label="请输入密码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="请再次输入密码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dialogFormVisible: false,
            dialogFormVisible1: false,
            formLabelWidth: "110px",
            msg: '点击创建钱包账户',
            form: {
                name: '',
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.center-c-right{
    flex: 1;
    margin-left: 60px;
}
.center-c-right-title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
}
.changpingxinxi-tian{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 20px;
}
.changpingxinxi-tian span{
    font-size: 14px;
    width: 90px;
}
.changpingxinxi-tian div{
    font-size: 14px;
    color: #6a6a6a;
}
.zhanghao{
    font-size: 12px !important;
    color: #ccc !important;
    margin-left: 30px;
    line-height: 19px;
}
.xiugaimima{
    font-size: 12px !important;
    color: #0092f9 !important;
    margin-left: 30px;
    line-height: 19px;
    cursor: pointer;
}
</style>