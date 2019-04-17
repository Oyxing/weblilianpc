<template>
    <div class="center-c-right">
        <div class="title">账户设置</div>
        <div class="changpingxinxi-tian">
            <span>昵称：</span>
            <input type="text" v-model="input" placeholder="吴三桂">
            <div>请将字数控制在6字以内...</div>
        </div>
        <div class="changpingxinxi-tian">
            <span>签名：</span>
            <input type="text" style='width: 300px;' v-model="input" placeholder="一只穿云箭，千军万马来相见！">
            <div>请将字数控制在40字以内...</div>
        </div>
        <div class="changpingxinxi-tian">
            <span>性别：</span>
            <div>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </div>
        </div>
        <div class="changpingxinxi-tian">
            <span>头像：</span>
            <el-upload
                class="avatar-uploader"
                action=""
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div style="margin-left: 10px;">上传头像文件只能是jpg格式，大小能超过2M……</div>
        </div>
        <div class="changpingxinxi-tian">
            <span>收件地址：</span>
            <input type="text" style="flex:1" v-model="input" placeholder="请输入您的具体地址，以便能即时发送您的交易作品">
        </div>
        <div class="changpingxinxi-tian" style='margin-top: 30px;'>
            <span></span>
            <div class="changpingxinxi-tian-btn" @click="baocun">保存</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            radio: "1",
            imageUrl: '',
            input: ''
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
            return isJPG && isLt2M;
        },
        baocun(){
            this.$router.push({path:'/homepage'})
        }
    }
}
</script>

<style scoped>
.center-c-right{
    flex: 1;
    margin-left: 60px;
}
.title{
    font-size: 14px;
    font-weight: bold;
    height: 40px;
    width: 100%
}
.changpingxinxi-tian{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
}
.changpingxinxi-tian span{
    flex-wrap: 0;
    width: 90px; 
    font-size: 14px;
    color: #000;
    line-height: 30px;
    text-align: left;
    margin-right: 10px;
}
.changpingxinxi-tian>input{
    flex-grow: 0;
    width: 120px; 
    height: 30px;
    border: 1px solid #eee;
    font-size: 12px;
    border-radius: 4px;
    text-indent: 10px;
    color: #8a8a8a;
    outline:none;
    margin-right: 20px;
}
.changpingxinxi-tian>div{
    font-size: 12px;
    line-height: 30px;
    color: #cccccc;
}
.avatar-uploader{
    margin-top: 6px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #eee;
    background: #fff
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .changpingxinxi-tian-btn{
      width: 150px;
      height: 36px;
      border-radius: 4px;
      background: #409EFF;
      text-align: center;
      line-height: 36px !important; 
      color: #fff !important;
      cursor: pointer;
  }
</style>