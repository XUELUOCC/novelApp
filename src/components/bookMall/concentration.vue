<template>
    <div class="concentrationContainer">
        <div class="iconList">
            <div class="rankList imgs" @click="getRank">
              <img src="../../assets/bookMall/rabkList.png" alt="">
              <span>{{ranking}}</span>
            </div>
            <div class="newBook imgs" @click="getNewBook">
              <img src="../../assets/bookMall/newBook.png" alt="">
              <span>{{newBook}}</span>
            </div>
            <div class="bookFinish imgs" @click="getFinishedBook">
              <img src="../../assets/bookMall/bookFinish.png" alt="">
              <span>{{finishedBook}}</span>
            </div>
            <div class="bookWaste imgs" @click="getBookWaste">
              <img src="../../assets/bookMall/bookWaste.png" alt="">
              <span>{{bookWaste}}</span>
            </div>
        </div>
        <div class="tips"></div>

        <div class="cellBook">
        <van-cell value="查看更多"  is-link @click="getMoreGuru">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{guruText}}</span>
            </template>
        </van-cell>
        <div class="bookInfo" @click="getBookDetailOne">
            <div class="infoLeft">
            <img src="../../assets/bookShelf/novelPage.jpg" alt="">
            </div>
            <div class="infoRight">
            <div class="name">{{guruObj.name}}</div>
            <div class="introduct">{{guruObj.introduct}}</div>
            <div class="author">
                <span class="spans">{{guruObj.author}}</span>
                <div class="authorRight">
                <van-button color="#ff637e" plain hairline  size="mini">完结</van-button>
                <van-button color="#b5b3c9" plain hairline  size="mini">奇幻玄幻</van-button>
                </div>
            </div>
            </div>
        </div>
        <div class="bookGuru">
            <van-grid :border="false" :column-num="3" :gutter="10">
            <van-grid-item v-for="(item,index) in guruList" :key="item.index" @click="getGuruBookDetail(index)">
                <van-badge >
                    <div class="guruContent">
                    <van-image :src="item.src" />
                    <span class="guruSpan">{{item.name}}</span>  
                    </div>
                            
                </van-badge>
            </van-grid-item>
            </van-grid>
        </div>
        </div>

        <div class="allNetwork">
        <van-cell value="查看更多" is-link @click="getAllNetwork">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{allNetworkText}}</span>
            </template>
        </van-cell>
        <div class="allNetworkList">
            <van-grid 
            :border="false" 
            :column-num="2"
            >
            <van-grid-item  
            v-for="(item,index) in networkList" 
            :key="item.index"
            @click="getNetworkContent(index)">
                <div class="networkContent">
                <div class="networkLeft">
                    <img :src="item.src" alt="">
                </div>
                <div class="networkRight">
                    <div :class="['ranking',item.class]">{{item.rank}}</div>
                    <div class="networkName">{{item.name}}</div>
                    <div class="networkAuthor">醉不乖</div>
                </div>
                </div>      
            </van-grid-item>
            </van-grid>
        </div>

        </div>

        <div class="cityBook">
        <van-cell value="查看更多" is-link @click="getCityBook">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{cityBookText}}</span>
            </template>
        </van-cell>
        <div class="cityBookList">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad">
            <div class="bookInfo" v-for="(item,index) in cityBookList" :key="item.index" @click="getCityBookContent(index)">
                <div class="infoLeft">
                <img src="../../assets/bookShelf/novelPage.jpg" alt="">
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
            </van-list>
        </div>
        </div>

        <div class="XuanHuanBook">
        <van-cell value="查看更多" is-link @click="getXuanHuan">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{XuanHuanText}}</span>
            </template>
        </van-cell>
        <div class="cityBookList">
            <van-list
            v-model="loadingX"
            :finished="finishedX"
            finished-text=""
            @load="onLoadX">
            <div class="bookInfo" v-for="(item,index) in XuanHuanList" :key="item.index" @click="getXuanHuanBookContent(index)">
                <div class="infoLeft">
                <img src="../../assets/bookShelf/novelPage.jpg" alt="">
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
            </van-list>
        </div>
        </div>

        <div class="bottomText">
        ——我们是有底线的——
        </div>
    </div>
</template>

<script>
export default {
    name:'concentration',
    data(){
        return{
            loading: false,
            finished: false,
            loadingX: false,
            finishedX: false,
            ranking:'排行榜',
            newBook:'新书榜',
            finishedBook:'完结榜',
            bookWaste:'书荒',
            guruText:'大神作品，强烈推荐',
            allNetworkText:'全网最新，好书不断',
            cityBookText:'都市高手',
            XuanHuanText:'玄幻佳作',
            guruObj:{
              name:'圣墟',
              introduct:'一本好书',
              author:'辰东',
            },
            guruList:[
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
            networkList:[
            {
                name:'圣墟',
                rank:'TOP1',
                class:'item1',
                author:'醉不乖',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                rank:'TOP2',
                class:'item2',
                author:'醉不乖',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                rank:'TOP3',
                class:'item3',
                author:'醉不乖',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },  
            {
                name:'圣墟',
                rank:'TOP4',
                class:'item4',
                author:'醉不乖',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },   
            ],
            cityBookList:[
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            ],
            XuanHuanList:[
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },   
            ]
        }
    },
    methods:{
         //点击大神小说
        getGuruBookDetail(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        getBookDetailOne(){
          console.log('aaa')
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        getNetworkContent(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        onLoad(){
            if(this.cityBookList.length==6){
            this.loading=false;
            this.finished=true;
            }
        },
        onLoadX(){
            if(this.XuanHuanList.length==6){
            this.loadingX=false;
            this.finishedX=true;
            }
        },
        getCityBookContent(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        getXuanHuanBookContent(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        //排行榜
        getRank(){
          this.$router.push('/rankingList')
        },
        //新书榜
        getNewBook(){
          this.$router.push({name:'bookList',params:{title:this.newBook}})
        },
        //完结榜
        getFinishedBook(){
          this.$router.push({name:'bookList',params:{title:this.finishedBook}})
        },
        //书荒
        getBookWaste(){
          this.$router.push({name:'bookList',params:{title:this.bookWaste}})
        },
        //大神作品，强烈推荐
        getMoreGuru(){
          this.$router.push({name:'bookList',params:{title:this.guruText}})
        },
        //全网最新，好书不断
        getAllNetwork(){
          this.$router.push({name:'bookList',params:{title:this.allNetworkText}})
        },
        //都市高手
        getCityBook(){
          this.$router.push({name:'bookList',params:{title:this.cityBookText}})
        },
        //玄幻佳作
        getXuanHuan(){
           this.$router.push({name:'bookList',params:{title:this.XuanHuanText}})
        }
    }
}
</script>
<style scoped>
.concentrationContainer{
    width:100%;
}
.iconList{
  width:95%;
  height:25%;
  margin:20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rankList,.newBook,.bookFinish,.bookWaste{
  width:25%;
  height:100%;
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.imgs img{
  width:40%;
}
.imgs span{
  margin-top:15px;
}
.tips{
  width:100%;
  height:5px;
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

/**全网好书 */
.allNetworkList{
  width:95%;
  margin:0 auto;
}
.networkContent{
  width:100%;
  height:120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.networkLeft{
  width:55%;
  height:100%;
}
.networkLeft img{
  width:100%;
}
.networkRight{
  width:40%;
  height:100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.ranking{
  /* width:50%;
  height:20%; */
  padding:2px 4px;
  display: flex;
  /* background-color:#fe574e; */
  color:#fff;
  justify-content: center;
  align-items: center;
  border-radius: 0 5px 0 5px;
}
.networkName{
  width:100%;
  height:20%;
  display: flex;
  align-items: center;
}
.networkAuthor{
  width:100%;
  height:20%;
  color:#cecece;
  display: flex;
  align-items: center;
}
.item1{
  background-color:#fe574e;
}
.item2{
  background-color:#ff9d4f;
}
.item3{
  background-color:#f8c667;
}
.item4{
  background-color:#cecece;
}

/**都市 */
.cityBook{
  width:100%;
  /* margin:0 auto; */
}

/**玄幻 */
.XuanHuanBook{
  width:100%;
  margin-top:10px;
}

/**底部 */
.bottomText{
  width:100%;
  margin:20px auto;
  text-align: center;
  color:#969799;
}
</style>