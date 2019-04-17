<template>
    <div class="tl-top">
        <div class="tl-three" v-for='(item,index) in yishujiaList' :key='index'>
            <div class="tl-one">{{ item.title }}</div>
            <div class="tl-two">
                <span>{{ item.name1 }}</span>
                <span>{{ item.name2 }}</span>
                <span>{{ item.name3 }}</span>
                <span>{{ item.name4 }}</span>
                <span>{{ item.name5 }}</span>
                <span>{{ item.name6 }}</span>
                <span>{{ item.name7 }}</span>
                <span>{{ item.name8 }}</span>
                <span>{{ item.name9 }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TlTop',
    data(){
        return{
            yishujiaList:[{
                title: '热门艺术家',
                name1: '唐伯虎',
                name2: '齐白石',
                name3: '梵高',
                name4: '张大千',
                name5: '达芬奇',
                name6: '马大牛',
                name7: '牛小军',
                name8: '张三丰',
                name9: '李四地'
            },{
                title: '艺术地域',
                name1: '中国',
                name2: '西方',
                name3: '传统',
                name4: '彩绘',
                name5: '剪纸',
                name6: '汉唐工艺',
                name7: '西藏木雕',
                name8: '张三丰',
                name9: '东汉古墓'
            }]
        }
    }
}
</script>

<style scoped>
.tl-top{
    width: 100%;
    height: 170px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2);
    padding: 20px;
}
.tl-one{
    width: 100%;
    font: 600 14px/14px "微软雅黑";
}
.tl-two{
    width: 100%;
    margin-top: 6px;
}
.tl-two span{
    font: 100 12px/20px "微软雅黑";
    margin-right: 10px;
    display: block;
    float: left;
    cursor: pointer;
}
.tl-three{
    width: 100%;
    height: 68px;
    margin-bottom: 6px;
}
</style>