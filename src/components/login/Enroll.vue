<template>
    <div class="login">
        <div class="login-center">
            <div class="login-font">
                <img src="../../statics/img/login-font.png" alt="">
            </div>
            <el-form class="login-form">
                <!-- 邮箱 -->
                <el-form-item class="login-el-form-item">
                    <input type="text" placeholder="请输入您的邮箱地址">
                    <i class="iconfont icon-youxiang" id='email'></i>
                </el-form-item>
                <!-- 提示信息 -->
                <div class="login-tishi">邮箱格式不正确</div>
                <el-form-item class="login-el-form-item">
                    <input type="password" placeholder="请输入您的密码">
                    <i class="iconfont icon-mimaffffffpx" id='email'></i>
                </el-form-item>
                <!-- 提示信息 -->
                <div class="login-tishi">密码格式不正确</div>
                <el-form-item class="login-el-form-item">
                    <input type="password" placeholder="请再次输入您的密码">
                    <i class="iconfont icon-mimaffffffpx" id='email'></i>
                </el-form-item>
                <!-- 提示信息 -->
                <div class="login-tishi">两次密码输入不一致</div>
                <el-form-item class="login-el-form-item">
                    <input type="text" placeholder="请输入您的昵称">
                    <i class="iconfont icon-gerenzhongxin-xuanzhong"></i>
                </el-form-item>
                <!-- 提示信息 -->
                <div class="login-tishi">两次密码输入不一致，请重新输入</div>
                <!-- 登录按钮 -->
                <el-form-item class="login-el-form-item" >
                    <button>点击注册</button>
                </el-form-item>
            </el-form>
            <div class="login-zhuce">
                已有账号，<span @click="Login">点击登录</span>
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
                pass:""
            }
        }
    },
    created() {
    },
    methods: {
        Login(){
            this.$router.push({
                path: '/Login'
            })
        },
        hendkeLogin(){
            console.log(this.from)
            // this.$router.push({
            //     path: '/homepage'
            // })
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
    height: max-content;
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
    margin-top: 24px;
    height: 50px;
}
.login-el-form-item{
    width: 80%;
    margin: 20px auto auto auto;
    display: block;
    border-bottom: 1px solid #ccc;
    color: #ccc;
}
.login-el-form-item span{
    margin-right: 14px;
}
.login-el-form-item input{
    width: 90%;
    border: 0;
    outline:none;
    background: rgba(255, 255, 255, 0);
    font-family: "微软雅黑";
}
.login-el-form-item i{
    float: right;
    font-size: 22px
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
    margin: 0 auto;
}
.login-font img{
    width: 100%;
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
    margin: 0 auto;
    font-size: 14px;
    font-family: "微软雅黑";
    color: #f00;
    display: none
}
</style>