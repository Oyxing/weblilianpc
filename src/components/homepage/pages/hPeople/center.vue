<template>
    <div class="list-left">
        <div class="list-left-title">作品分类</div>

        <div class="list-left-item" v-for="(item1,index1) in nav" :key='index1' :class="item1.name == itemname?'list-left-itemhover':''"   @mouseenter="enter(item1.list,item1.name)" @mouseleave="leave()" >
            <i class="iconfont" :class="item1.icon"></i>
            <span>{{ item1.name }}</span>
            <i class="iconfont iconright icon-arrow-right-copy-copy-copy"></i>
        </div>
        
        <div name="fade" class="list-left-nav" v-show="seen" >
            <div  v-for="(item2,index2) in itemlist" :key='index2' @mouseenter="enter([],item2.name)" @mouseleave="leave()">
                <div class="list-left-nav-t">
                    <i class="iconfont" :class="item2.icon1"></i>    
                    {{ item2.name1 }}
                </div>
                <div class="list-left-nav-c">
                    <span v-for='(item3, index3) in item2.itemS' :key='index3'>{{ item3 }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itemlist:[],
            itemname:"",
            nav: [{
                icon: 'icon-shezhi',
                name: '书画',
                list: [
                    {
                        icon1: 'icon-huabi',
                        name1: '画作',
                        name: '书画',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    },
                    {
                        icon1: 'icon-huabi',
                        name1: '书法ss',
                        name: '书画',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    }
                ]
            },{
                icon: 'icon-shezhi',
                name: '画作',
                list: [
                    {
                        icon1: 'icon-huabi',
                        name1: '画作',
                        name: '画作',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    },
                    {
                        icon1: 'icon-huabi',
                        name1: '书法',
                        name: '画作',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    }
                ]
            },{
                icon: 'icon-shijuandianping',
                name: '国产',
                list: [
                    {
                        icon1: 'icon-huabi',
                        name1: '画作',
                        name: '国产',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    },
                    {
                        icon1: 'icon-huabi',
                        name1: '书法',
                        name: '国产',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    }
                ]
            },{
                icon: 'icon-youxiang',
                name: '花瓶',
                list: [
                    {
                        icon1: 'icon-huabi',
                        name1: '画作',
                        name: '花瓶',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    },
                    {
                        icon1: 'icon-huabi',
                        name1: '书法',
                        name: '花瓶',
                        itemS: [
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                            "毛泽东体",
                        ] 
                    }
                ]
            }],
            seen: false,
        }
    },
    methods: {
        enter(arr,name){
            if(name){
                this.itemname = name
            }
            if( arr.length > 0 ){
               this.itemlist = arr 
            }
            this.seen = true;
        },
        leave(){
                this.seen = false;
                this.itemname = "";
        }
    }
}
</script>

<style scoped>
.list-left-nav{
    position: absolute;
    top: 84px;
    left: 12.1%;
    width: 340px;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
    z-index: 999;
}
.list-left-nav>div:nth-child(1){
    margin-top: 0;
}
.list-left-nav-t{
    font-size: 14px;
    font-weight: bold;
    background: #fff9ee;
    height: 36px;
    line-height: 36px;
    text-indent: 10px;
}
.list-left-nav-t i{
    color: #ffa200;
    font-weight: 100;
    margin-top: 10px;
}
.list-left-nav-c{
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    line-height: 18px;
}
.list-left-nav-c span{
    flex-grow: 0;
    margin: 0 10px 4px 0;
    font-size: 12px;
    color: #5f5f5f;
    cursor: pointer;
}
.list-left-nav-c span:hover{
    text-decoration:underline;
    color: cornflowerblue;
}
.iconright{
    float: right;
    color: #ccc !important;
}



.list-left{
    width: 12%;
    height: 412px;
    background: #fff;
    margin-top: 34px;
    margin-right: 10px;
    box-shadow: 2px 2px 10px rgba(166, 166, 166, .2); 
    padding-top: 10px
}
.list-left-title{
    font-size: 14px;
    line-height: 40px;
    font-weight: bold;
    text-align: center;
    color: #ffa200;
}
.list-left-item{
    line-height: 36px;
    margin-bottom: 4px;
    font-size: 14px;
    display: flex;
    padding: 0 12px;
    cursor: pointer;
}
.list-left-itemhover{
    background: #fff9ee;
    border-left: 3px solid #ffa200;
    padding: 0 12px 0 9px;
}
.list-left-item>span{
    flex: 1;
    text-align: left;
    margin-left: 10px;
}
.list-left-item i{
    font-size: 14px;
    color: #ffa200;
}
</style>