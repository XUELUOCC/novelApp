<template>
    <div class="bookCatalogue">
        <div class="bookCatalogueNav">
            <van-nav-bar :title="bookName" left-text="" left-arrow fixed placeholder @click-left="onClickLeft">
                <template #right>
                    <van-tag color="#121413" text-color="#fff" @click="setSortIcon">
                        <div v-if="!navSortFlag" class="navSort">
                            <span>倒序</span> 
                            <van-icon color="#fff" name="ascending" size="18"/>
                        </div>    
                        <div v-if="navSortFlag" class="navSort">
                            <span>正序</span> 
                            <van-icon color="#fff" name="descending" size="18"/>
                        </div>          
                    </van-tag>
                </template>
            </van-nav-bar>
        </div>

        <div class="catalogueList">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
                <van-cell v-for="(item,index) in list " :key="index" value="已缓存" >
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <div class="catalogueCell">
                        <img src="../../assets/bookCatalogue/point.png" alt="" style="width:10px">
                        <img v-if="cacheFlag" src="../../assets/bookCatalogue/pointGray.png" alt="" style="width:10px">
                        <span class="">{{item.chapter}}</span>
                        <span class="">{{item.chapterName}}</span>
                    </div>
                    
                </template>
                </van-cell>
            </van-list>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'bookCatalogue',
    data(){
        return{
            bookName:'',
            navSortFlag:false,
            cacheFlag:false, //判断是否缓存
            list: [
                {
                    chapter:'第一章',
                    chapterName:'楔子'
                },
                {
                    chapter:'第二章',
                    chapterName:'乡村少年'
                },
                {
                    chapter:'第三章',
                    chapterName:'少年大帝'
                },
                
            ],
            loading: false,
            finished: false,
        }
    },
    mounted(){
        console.log(this.$route.params.bookName)
        this.bookName=this.$route.params.bookName
    },
    methods:{
        onClickLeft(){
            console.log('返回')
            this.$router.back(-1)
        },
        setSortIcon(){
            this.navSortFlag=!this.navSortFlag;
            this.list.reverse();  //数组的逆序
        },
        onLoad(){
            this.loading=false;
            this.finished=false;
        }
    }
}
</script>

<style scoped>
.bookCatalogue{
    width:100%;
    height:100%;
}
.bookCatalogueNav{
    width:100%;
}
.bookCatalogueNav /deep/ .van-nav-bar{
    background-color:#121413;
}
.bookCatalogueNav /deep/ .van-nav-bar .van-icon{
    color:#fff;
}
.bookCatalogueNav /deep/.van-nav-bar__title{
    color:#fff;
}
.bookCatalogueNav /deep/ .van-tag{
    border:1px solid #fff;
    border-radius: 5px;
}
.navSort{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.catalogueCell{
    display: flex;
    align-items: center;
}
.catalogueCell img{
    margin-right:5px;
}
</style>