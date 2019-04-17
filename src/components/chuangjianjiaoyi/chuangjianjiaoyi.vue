<template>
    <div>
        <div class="chanpingxinxi">
          <div class="changpingxinxi-fanhui">
            <span @click="fanhuishangpingleibiao" style="cursor: pointer;"><i class="iconfont icon-arrow_left"></i>产品列表</span>
          </div>
          <div>
            <div class="changpingxinxi-title">基本信息：</div>
            <div class="changpingxinxi-tian">
              <span>交易标题：</span>
              <input type="text" v-model="input" placeholder="请输入交易标题">
              <div>请将字数控制在20字以内...</div>
            </div>
            <div class="changpingxinxi-tian">
              <span>作品名称：</span>
              <input class="mingcheng" type="text" v-model="input1" placeholder="请输入作品名称">
              <div></div>
            </div>
            <div class="changpingxinxi-tian">
              <span>作者：</span>
              <input class="name" type="text" v-model="input2" placeholder="">
              <div>请输入作者全名，如果是古代作品，请输入“朝代-作者全名”，比如“北宋-张先”</div>
            </div>
            <div class="changpingxinxi-tian">
              <span>实物详情：</span>
              <input class="xiangqing" type="text" v-model="input2" placeholder="尺寸/净重/新旧">
              <div>输入格式举例：“尺寸：120mm*300mm，净重：100g，新旧：八成新，……”</div>
            </div>
            <div class="changpingxinxi-tian xuanze">
              <span>选择作品分类：</span>
              <el-cascader
                size= "medium"
                placeholder="请选择作品分类"
                :options="options"
                filterable
                change-on-select
              ></el-cascader>
            </div>
            <div class="shangchuan">
              <div class="shangchuan-title">
                <span>上传作品图片:</span>
                <div>
                  <span>0</span>
                  <span>/9</span>
                </div>
              </div>
              <div class="shangchuan-img">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <el-radio v-model="radio" label="1">请详细阅读<span>《艺链网图片上传规则》</span></el-radio>
              </div>
            </div>
            <div class="shangchuan-btn" @click="hreftwo">下一步</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      input1: '',
      input2: '',
      options: [{
        label: '画作',
        children: [{
          label: '水墨画'
        }, {
          label: '彩素描工艺'
        }, {
          label: '西方水彩'
        }, {
          label: '山水画'
        }, {
          label: '工笔国画'
        }]
      },{
        label: '书法',
        children: [{
          label: '王羲之'
        }, {
          label: '毛泽东'
        }, {
          label: '唐伯虎'
        }, {
          label: '章邯'
        }]
      },{
        label: '雕塑',
        children: [{
          label: '石膏雕'
        }, {
          label: '泥雕'
        }, {
          label: '彩雕'
        }, {
          label: '石雕'
        }, {
          label: '钢雕'
        }]
      },{
        label: '陶艺',
        children: [{
          label: '茶壶'
        }, {
          label: '景德镇瓷器'
        }, {
          label: '青花瓷'
        }, {
          label: '水缸'
        }, {
          label: '工笔国画'
        }]
      }],
      dialogImageUrl: '',
      dialogVisible: false,
      radio: false
    }
  },
  methods: {
     handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    hreftwo(){
      this.$router.push({path:'jiaoyixinxi'})
    },
    fanhuishangpingleibiao(){
      this.$router.push({path:'/homepage/h_people'})
    }
  }
}
</script>

<style scoped>
.chanpingxinxi{
  background: #fff;
  margin-top: 10px;
  padding: 30px;
  height: 566px;
}
.changpingxinxi-fanhui{
  width: 100%;
}

.changpingxinxi-fanhui span{
  width: 110px;
  height: 32px;
  display: block;
  line-height: 32px;
  border-radius: 20px;
  background: #ff7143;
  font-size: 14px;
  color: #fff;
}
.changpingxinxi-fanhui span i{
  margin: 0 10px;
}
.changpingxinxi-title{
  width: 100%;
  height: 32px;
  font-size: 14px;
  margin: 20px 0 4px 0;
  font-weight: bold;
  text-indent: 30px;
}
.changpingxinxi-tian{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
}
.changpingxinxi-tian span{
    flex-wrap: 0;
    width: 100px; 
    font-size: 14px;
    color: #000;
    line-height: 30px;
    text-align: right;
    margin-right: 10px;
}
.changpingxinxi-tian>input{
    flex-grow: 0;
    width: 400px; 
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
.mingcheng{
  width: 190px !important;
}
.name{
  width: 100px !important;
}
.xiangqing{
  width: 480px !important;
}
.xuanze>span:nth-child(2){
  width: 240px;
}
.xuanze>span:nth-child(2) input{
  width: 100% !important;
}

.shangchuan{
  /* margin-left: 110px; */
}
.shangchuan-title{
  font-size: 14px;
  margin-bottom: 10px;
  display: flex
}
.shangchuan-title>span{
  flex: 1
}
.shangchuan-img{
  margin-left: 110px;
}
.shangchuan-img .el-radio{
  margin-top: 10px;
}
.shangchuan-img .el-radio span{
  color: #1192ff;
}
.shangchuan-btn{
  width: 150px;
  height: 36px;
  border-radius: 4px;
  background: #1192ff;
  margin-top: 15px;
  color: #fff;
  text-align: center;
  line-height: 36px;
  margin-left: 110px;
  cursor: pointer;
}
</style>