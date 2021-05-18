<template>
    <div>
        <div class="top">
            <van-nav-bar
            fixed
            placeholder
            title="编辑书架"
            left-arrow
            @click-left="onClickLeft"
            />
         </div>
        <div class="content" v-if="!showFlag">
            <van-grid :border="false" :column-num="3" :gutter="10">
                <van-grid-item v-for="(item,index) in list" :key="item.index" @click="checked(index)">
                    <van-badge >
                        <div class="child" >
                            <van-image :src="item.src" />
                        </div>
                        <template #content>
                            <img 
                            v-if="item.flag"
                            style=" width:0.6rem;height:0.6rem;" 
                            src="../../assets/editBookShelf/checked.png"
                            />
                             <img 
                             v-else
                            style=" width:0.5rem;height:0.5rem;" 
                            src="../../assets/editBookShelf/unchecked.png"
                            />
                        </template>
                    </van-badge>
                </van-grid-item>
            </van-grid>
        </div>
        <div class="bottom">
            <div class="bottomContent">
                <div class="bottomLeft">
                    <van-button style="border-color:#e7e7e7" size="small" color="red" plain  hairline block @click="checkAll">全选</van-button>
                </div>
                <div class="bottomRight">
                    <van-button style="border-color:#e7e7e7" size="small" color="red" plain  hairline block @click="del">删除({{num}})</van-button>
                </div>               
            </div>
        </div>
        <!--删除完成，书架为空时的展示-->
        <div class="listNull" v-if="showFlag">
            <van-empty description="您的书架为空" :image="imgSrc">
                <van-button round plain  type="danger" class="bottom-button" to="/bookMall">去添加书籍></van-button>
            </van-empty>
        </div>
    </div>
</template>

<script>
export default {
    name:'editBookShelf',
    data(){
        return{
            // flag:false,
            imgSrc:require("../../assets/readingLog/paper.png"),
            showFlag:false,
            num:0,
            list:[
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
                {
                    src:require('../../assets/bookShelf/novelPage2.jpeg'),
                    name:'圣墟',
                    flag:false
                },
            ]
        }
    },
    watch:{
        list:function(value,oldValue){
            console.log(value.length)
            console.log(oldValue)
            if(value.length==0){
                this.showFlag=true;
            }
        }
    },
    methods:{
        //选中的小说数据
        checked(index){
            this.list[index].flag=!this.list[index].flag;
            if(this.list[index].flag){
                this.num++;
            }else{
                this.num=this.num-1;
            }
        },
        //返回按钮
        onClickLeft(){
            this.$router.back(-1);
        },
        //全选
        checkAll(){
            this.num=this.list.length;
            this.list.forEach((item,index)=>{
                item.flag=true;
            })
        },
        //删除
        del(){
            let newData=this.list.filter((item,index)=>{
                return item.flag==false;
            })
            this.list=newData;
            this.num=0;
        }
    }
}
</script>

<style scoped>
div /deep/.van-nav-bar .van-icon{
    color:#333;
}
div /deep/ .van-badge{
    background-color:#fff;
}

.content{
    margin-bottom:60px;
}

.bottom{
    width:100%;
    height:60px;
    background-color:#fff;
    position:fixed;
    bottom:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bottomContent{
    width:85%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottomLeft,.bottomRight{
    width:45%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

/**书架为空时的展示 */
.listNull{
    width:80%;
    margin:0 auto;
}
</style>