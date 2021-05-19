<template>
    <div class="containerBoyBook">
        <div class="tips"></div>

        <div class="cellBook" v-for="item in haveSoundList" :key="item.index" >
        <van-cell value="查看更多"  is-link>
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{item.title}}</span>
            </template>
        </van-cell>
        <div class="bookInfo">
            <div class="infoLeft">
            <img :src="item.src" alt="">
            </div>
            <div class="infoRight">
            <div class="name">{{item.name}}</div>
            <div class="introduct">{{item.introduct}}</div>
            <div class="author">
                <span class="spans">{{item.author}}</span>
                <div class="authorRight">
                <van-button color="#ff637e" plain hairline  size="mini">完结</van-button>
                <van-button color="#b5b3c9" plain hairline  size="mini">奇幻玄幻</van-button>
                </div>
            </div>
            </div>
        </div>
        <div class="bookGuru">
            <van-grid :border="false" :column-num="3" :gutter="10">
            <van-grid-item v-for="(tip,index) in issueList" :key="tip.index" @click="getBookDetail(index)">
                <van-badge >
                    <div class="guruContent">
                    <van-image :src="tip.src" />
                    <span class="guruSpan">{{tip.name}}</span>  
                    </div>
                            
                </van-badge>
            </van-grid-item>
            </van-grid>
        </div>
        </div>

        <div class="bottomText">
        ——我们是有底线的——
        </div>
    </div>
</template>
<script>
export default {
    name:'haveSound',
    data(){
        return{
            haveSoundList:[
                {
                title:'都市修仙有声小说',
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                title:'玄幻悬疑有声小说',
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                title:'女频言情有声小说',
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            ],
            issueList:[
            {
                name:'圣墟',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            ],
        }
    },
    methods:{
        //点击小说
        getBookDetail(index){

        },
        getCityBook(index){

        }
    }
}
</script>
<style scoped>
.containerBoyBook{
    width:100%;
}
.tips{
  width:100%;
  height:5px;
  margin:20px auto;
  background-color: #f7f7f7;
}

/*大神推荐*/
.bookInfo{
  width:95%;
  height:120px;
  margin:0 auto 35px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.infoLeft{
  width:35%;
  display:flex;
  /* justify-content: center; */
  padding-left:10px;
  align-items: center;
}
.infoLeft img{
  width:80%;
}
.infoRight{
  width:68%;
  height:85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.name{
  width:100%;
  height:20%;
  font-size:14px;
  display: flex;
  align-items: center;
  font-weight:600;
  text-align: left;
  margin-bottom:5px;
}
.introduct{
  width:100%;
  height:50%;
  font-size:10px;
  /* display: flex;
  align-items: center; */
  color:#cecece;
  text-align: left;
}
.author{
  width:100%;
  height:20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author .spans{
  /* display: inline-block;
  width:30%; */
  font-size:12px;
  text-align: left;
}
.authorRight{
  width:65%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.one .van-button--default{
  color:red;
}
.guruContent{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.guruSpan{
  margin-top:5px;
}

/**底部 */
.bottomText{
  width:100%;
  margin:20px auto;
  text-align: center;
  color:#969799;
}
</style>