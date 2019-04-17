<template>
    <div class="tl-bottom">
        <el-carousel :interval="5000" arrow="hover" height='344px'>
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <div class="tl-img"><img :src="item.src" alt=""></div>
                <div class="tl-bottom-f">
                    <div class="tl-bottom-f-text">
                        {{ item.title }}
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'TlBottom',
    data(){
        return{
            imgList:[{
                src: '/statics/img/001.jpg',
                title: '水墨中国，艺术巅峰！'
            },{
                src: '/statics/img/002.jpg',
                title: '天涯何处无芳草天涯何处无芳草天涯何处无芳草天涯何处无芳草。'
            },{
                src: '/statics/img/003.jpg',
                title: '何必非要写代码'
            },{
                src: '/statics/img/004.jpg',
                title: '千秋月别西楚将'
            }]
        }
    }
}
</script>

<style scoped>
.tl-bottom{
    width: 100%;
    height: 344px;
    background: #fff;
    margin-top: 18px;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    position: relative;
}
.tl-bottom-f{
    width: 100%;
    height: 42px;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    text-indent: 18px;
}
.tl-bottom-f-text{
    width: 70%;
    line-height: 44px;
    height: 42px;
    color: #fff;
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tl-img{
    width: 100%;
    height: 344px;
    background: #fff;
    overflow: hidden;
    padding: 10px;
    display: flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
}
.tl-img img{
    width: 100%;
    margin: auto;
    display: block;
    overflow: hidden;
}

</style>