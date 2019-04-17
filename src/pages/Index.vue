<template>
  <div class="pc-k">
    <div class="header-top">
      <div class="header-top-pc-name">艺链交易平台</div>
      <div class="header-top-pc-user">
        <div class="header-top-right">
          <q-btn round dense color="dark" small icon="mail_outline" style='margin-right: 12px;'>
            <q-chip floating color="red">22</q-chip>
          </q-btn>
          <q-btn round dense color="primary" icon="notifications_none" style='margin-right: 60px;'>
          </q-btn>
          <q-btn round color="deep-orange" icon="settings_power" />
        </div>
      </div>
    </div>
    <div class="nav-left">
      <div class="nav-left-list">
        <router-link :to="item.to" v-for="(item, index) in navList" :key='index'>
          <div class='nav-left-item' >
              <i class="iconfont" :class="item.icon"></i>
              <span>{{item.name}}</span>
          </div>
        </router-link>
      </div>
    </div>
    
    <div class='center'>
        <div class="center-c">
            <router-view />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      navList:[{
        icon: 'icon-chanpinyuyue',
        name: '首页',
        to:'/',
      },{
        icon: 'icon-guwan',
        name: '交易',
        to:'discover',
      },{
        icon: 'icon-iconfontzhizuobiaozhun023103',
        name: '发现',
        to:'transaction',
      },{
        icon: 'icon-chanpin',
        name: '新闻',
        to:'news'
      }]
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
.pc-k{
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f6f6f7;
}
.header-top{
  width: 100%;
  height: 64px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: url('../statics/img/header-top-bj.png') #fff 100% no-repeat;
  box-shadow: 1px 1px 16px rgba(167, 167, 167, .2);
  display: flex;
  padding: 0 20px;
}
.header-top-pc-name{
  width: 200px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  line-height: 64px;
  color: #4a4a4a;
}
.header-top-pc-user{
  flex: 1;
}
.header-top-pc-user .header-top-right{
  line-height: 64px;
}

.nav-left{
  position: absolute;
  top: 0;
  left: 0;
  width: 96px;
  height: 100vh;
  background: url('../statics/img/left-nav-bj.png') #fff 100% no-repeat;
  background-position:left 0 bottom 0;
  z-index: 1;
  box-shadow: 1px 1px 14px rgba(167, 167, 167, .1);
}
.header-top-right{
  float: right;
}
.header-top-right span{
  font: 100 14px/14px "";
  color: #4a4a4a;
  font-weight: bold;
  margin-top: 2px;
}
.q-btn-round{
  width: 2em;
  height: 2em;
}
.nav-left-list{
  margin-top: 116px;
}
.nav-left-item{
  width: 100%;
  height: 58px;
  /* background: #518df2; */
  margin-top: 16px;
  text-align: center;
  color: #696969;
  padding-top: 9px;
  cursor: pointer;
}
.nav-left-item i{
  width: 100%;
  height: 58px;
  margin-top: 9px;
  font-size: 24px;
}
.nav-left-item span{
  width: 100%;
  display: block;
  font-size: 12px;
  margin-top: 2px;
}

.nav-left-list a{
  text-decoration:none;
  display: block;
}

.router-link-exact-active{
  background: #518df2;
}
.router-link-exact-active .nav-left-item{
  color: #fff;
}
</style>
