<template>
    <div class="chanpingxinxi">
        <div class="changpingxinxi-fanhui">
            <span @click="fanhuishangpingleibiao" style="cursor: pointer;"><i class="iconfont icon-arrow_left"></i>产品信息</span>
        </div>
        <div>
            <div class="changpingxinxi-title">交易信息：</div>
            <div class="changpingxinxi-tian">
              <span>作品价格：</span>
              <input type="text" v-model="input" placeholder="请输入交易价格">
              <div>请以cny(人民币)为单位……</div>
            </div>
            <div class="changpingxinxi-tian">
              <span style='margin-left: 10px'>作品描述：</span>
              <el-input type="textarea" v-model="desc" placeholder="请输入作品详情描述，尽可能的详细最好……"></el-input>
            </div>
            <div class="jiaoyishuoming">
                <div>1、清晰的图片是您交易作品最直观的名片，能让买家做出合理判断，因此请熟读<span>《艺链网交易作品上传规范》</span>上传交易作品的图片，若因个人原因导致照片迷糊而没有产生交易的，费用一概一退。</div>
                <div>2、每次上传作品图片最多只能上传9张，并以第一张做为交易作品的封面，请保证图片品质。</div>
                <div>3、请尽量详细描述作品信息，为避免不必要的交易纠纷，如作品有破损或者瑕疵请拍照并上传，并做出详细说明，因作品缺陷而产生的交易纠纷，艺链网拥有最终处理权。</div>
                <div>4、艺链网只是基于区块链技术而研发的艺术品交易平台，一切艺术信息皆以用户（买家）的观点为基准</div>
            </div>
            <div class="yilianfagui">
                <el-radio v-model="radio" label="1">我遵守<span>《艺链网交易规范法规》</span></el-radio>
            </div>
            <div class="yilianfagui">
                <div @click="tijiaoshenhe">点击提交审核</div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            desc: ''
        }
    },
    methods: {
        fanhuishangpingleibiao(){
            this.$router.push({path:'chuangjianjiaoyi'})
        },
        tijiaoshenhe(){
            this.$router.push({path:'shenhe'})
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
.jiaoyishuoming{
    margin-left: 110px;
    font-size: 12px;
    background: #f3f3f3;
    padding: 10px;
    color: #8a8a8a;
    line-height: 20px;
    margin-bottom: 10px;
    margin-top: 50px;
}
.jiaoyishuoming div span{
    color: #1192ff;
}
.shuruk{
    height: 100px;
}
.yilianfagui{
    font-size: 14px;
    margin-left: 110px;
    color: #8a8a8a;
}
.yilianfagui span{
    color: #1192ff;
}
.yilianfagui>div{
    width: 130px;
    height: 36px;
    border-radius: 4px;
    background: #1192ff;
    text-align: center;
    line-height: 36px;
    color: #fff;
    font-size: 12px;
    margin-top: 30px;
}
</style>