<template>
    <div class="login">
        <div class="login-center">
            <div class="login-font">
                <img src="../../statics/img/login-font.png" alt="">
            </div>
            <el-form class="login-form">
                <!-- 账号 -->
                <el-form-item class="login-el-form-item">
                    <i class="iconfont icon-gerenzhongxin-xuanzhong"></i>
                    <input type="text" v-model="from.user" placeholder="请输入您的账号">
                </el-form-item>
                <!-- 密码 -->
                <el-form-item class="login-el-form-item">
                    <i class="iconfont icon-mimaffffffpx"></i>
                    <input type="password" v-model="from.pass" placeholder="请输入密码">
                </el-form-item>
                <!-- 提示 -->
                <div class="login-tishi">账号或密码错误</div>
                <!-- 登录按钮 -->
                <el-form-item class="login-el-form-item" >
                    <button @click='hendkeLogin("fromLogin")'>登录</button>
                </el-form-item>
            </el-form>
            <div class="login-zhuce">
                没有账号，<span @click="Enroll">点击注册</span>
            </div>
        </div>
    </div>
</template>

<script>
import acction from '../../statics/js/acction.js'

export default {
    name: 'Login',
    data(){    
        return{
            from:{
                user:"",
                pass:"oyxing"
            }
        }
    },
    created() {
    },
    methods: {
        Enroll(){
            this.$router.push({
                path: '/Enroll'
            })
        },
        hendkeLogin(){
            console.log(this.from)
            this.$router.push({
                path: '/homepage'
            })
           acction.creadFun({_this:this,pass:this.from.pass}).then((result) => {
               console.log('result')
               console.log(result)
           }).catch((err) => {
               console.log('err')
               console.log(err)
           });
        }
    }
    
}
</script>

<style scoped>
.login{
    width: 100%;
    height: 100vh;
    background: url('../../statics/img/Login.jpg') center no-repeat;
    position: relative;
}
.login-center{
    width: 400px;
    height: 400px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
.login-form{
    width: 100%;
    margin: auto;
}
.login-form>.login-el-form-item:last-child{
    border: 0;
    margin-top: 38px;
    height: 50px;
}
.login-el-form-item{
    width: 80%;
    margin: 20px auto auto auto;
    display: block;
    border-bottom: 1px solid #ccc;
}
.login-el-form-item:nth-child(3){
    margin-top: 30px;
}

.login-el-form-item i{
    display: block;
    float: left;
    margin-right: 16px;
    font-size: 26px;
    color: #9ec2ff;
}
.login-el-form-item input{
    width: 80%;
    height: 40px;
    outline:none;
    background:none;
    border: 0;
    float: left;
    font-family: "微软雅黑";
}
.login-el-form-item button{
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background: #518df2;
    outline:none;
    border: 0;
    box-shadow: 2px 2px 15px rgba(81, 141, 242, .4);
    color: #fff;
    cursor: pointer;
}
.login-font{
    width: 48%;
    margin: 26px auto 0 auto;
}
.login-font img{
    width: 100%;
    margin-bottom: 16px;
}
.login-zhuce{
    width: 80%;
    margin: 6px auto 0 auto;
    text-align: right;
    font-size: 14px;
    font-family: "微软雅黑";
    color: #6b6b6b;
}
.login-zhuce span{
    cursor: pointer;
}
.login-zhuce span:hover{
    text-decoration:underline;
    color: #518df2;
}
.login-tishi{
    width: 80%;
    margin: 10px auto;
    font-size: 14px;
    font-family: "微软雅黑";
    color: #f00;
}
</style>