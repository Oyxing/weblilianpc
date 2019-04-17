<template>
    <div class="center-c">
        <div class="center-c-left">
            <div class="center-c-left-name">
                <div class="center-c-left-name-t">
                    <img src="../../statics/img/tou.png" alt="">
                </div>
                <div class="center-c-left-name-n">唐伯虎</div>
                <button @click="xiugaiziliao">修改资料</button>
                
                <div class="center-c-left-nav">
                    <router-link v-for='(item,index) in navList' :key='index' :to='item.to'>
                        <i class="iconfont" :class='item.icon'></i>
                        <span>{{ item.name }}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return{
            navList: [{
                icon: 'icon-iconfontzhizuobiaozhun023103',
                name: '首页',
                to: '/homepage'
            }, {
                icon: 'icon-chakantieziguanzhu',
                name: '交易管理',
                to: '/homepage/h_people'
            }, {
                icon: 'icon-zixun',
                name: '浏览记录',
                to: '/homepage/h_record'
            }, {
                icon: 'icon-shezhi',
                name: '账号设置',
                to: '/homepage/h_setting'
            }]
        }
    },
    methods: {
        xiugaiziliao(){
            this.$router.push({
                path: '/homepage/zhanghushezhi'
            })
        }
    },
}
</script>

<style scoped>
.center-c{
    width: 100%;
    height: 100%;
    display: flex;
}
.center-c-left{
    width: 180px;
    height: 100%;
}
.center-c-left-name{
    width: 100%;
    background: #fcfafa;
    padding: 30px 0 40px 0;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
}
.center-c-left-name-t{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    background: #ccc;
}
.center-c-left-name-t>img{
    width: 100%;
}
.center-c-left-name-n{
    font: 600 14px/36px "微软雅黑";
    text-align: center;
}
.center-c-left-name button{
    background: #ffbf79;
    border: 0;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: 3px 10px;
    font-family: "微软雅黑";
    cursor: pointer;
    outline: none; 
}
.center-c-left-name button:hover{
    background: #ffb35f;
}
.center-c-left-nav{
    width: 100%;
    padding: 0 6px;
    margin-top: 24px;
}
.center-c-left-nav>a{
    padding: 10px 32px;
    display: flex;
    cursor: pointer;
    color: #4e4e4e;
}
.center-c-left-nav>a:hover{
    background: #f4f4f4;
    border-radius: 4px;
}
.center-c-left-nav>a i{
    font-size: 20px;
}
.center-c-left-nav>a span{
    font: 100 14px/14px "微软雅黑";
    display: block;
    margin: 3px 0 0 16px;
}
.router-link-exact-active{
    background: #f4f4f4
}
.router-link-exact-active i,
.router-link-exact-active span{
    color: #ffb75b;
}
</style>