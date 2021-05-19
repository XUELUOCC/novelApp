<template>
    <div class="containerBoyBook">
        <div class="tips"></div>

        <div class="cellBook">
        <van-cell value="查看更多"  is-link @click="getIssue">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{issueText}}</span>
            </template>
        </van-cell>
        <div class="bookInfo">
            <div class="infoLeft">
            <img src="../../assets/bookShelf/novelPage.jpg" alt="">
            </div>
            <div class="infoRight">
            <div class="name">圣墟</div>
            <div class="introduct">一本好书。。。。</div>
            <div class="author">
                <span class="spans">辰东</span>
                <div class="authorRight">
                <van-button color="#ff637e" plain hairline  size="mini">完结</van-button>
                <van-button color="#b5b3c9" plain hairline  size="mini">奇幻玄幻</van-button>
                </div>
            </div>
            </div>
        </div>
        <div class="bookGuru">
            <van-grid :border="false" :column-num="3" :gutter="10">
            <van-grid-item v-for="(item,index) in issueList" :key="item.index" @click="getBookDetail(index)">
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

        <div class="modernBook">
        <van-cell value="查看更多" is-link @click="getModern">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{modernText}}</span>
            </template>
        </van-cell>
        <div class="cityBookList">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text=""
            @load="onLoad">
            <div class="bookInfo" v-for="(item,index) in modernBookList" :key="item.index" @click="getCityBook(index)">
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

        <div class="ancientBook">
        <van-cell value="查看更多" is-link @click="getAncient"> 
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{ancientText}}</span>
            </template>
        </van-cell>
        <div class="cityBookList">
            <van-list
            v-model="loadingA"
            :finished="finishedA"
            finished-text=""
            @load="onLoadX">
            <div class="bookInfo" v-for="(item,index) in ancientList" :key="item.index" @click="getCityBook(index)">
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

        <div class="passBook">
        <van-cell value="查看更多" is-link @click="getPass">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
            <span class="custom-title titles">{{passText}}</span>
            </template>
        </van-cell>
        <div class="cityBookList">
            <van-list
            v-model="loadingA"
            :finished="finishedA"
            finished-text=""
            @load="onLoadX">
            <div class="bookInfo" v-for="(item,index) in passList" :key="item.index" @click="getCityBook(index)">
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
    name:'boyBook',
    components:{

    },
    data(){
        return{
            loading: false,
            finished: false,
            loadingA: false,
            finishedA: false,
            issueText:'本期主打',
            allNetworkText:'全网精品',
            modernText:'现代言情',
            ancientText:'古代言情',
            passText:'穿越虐恋',
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
            modernBookList:[
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
            ancientList:[
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
            passList:[
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
        //点击小说
        getBookDetail(index){

        },
        onLoad(){
            if(this.modernBookList.length==6){
            this.loading=false;
            this.finished=true;
            }
        },
        onLoadX(){
            if(this.ancientList.length==6){
            this.loadingA=false;
            this.finishedA=true;
            }
        },
        getCityBook(index){

        },
        //本期主打
         getIssue(){
             this.$router.push({name:'bookList',params:{title:this.issueText}})
        },
        //全网精品
        getAllNetwork(){
          this.$router.push({name:'bookList',params:{title:this.allNetworkText}})
        },
        //现代言情
        getModern(){
            this.$router.push({name:'bookList',params:{title:this.modernText}})
        },
        //古代言情
        getAncient(){
             this.$router.push({name:'bookList',params:{title:this.ancientText}})
        },
        //穿越虐恋
        getPass(){
            this.$router.push({name:'bookList',params:{title:this.passText}})
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
.modernBook{
  width:100%;
  /* margin:0 auto; */
}

/**玄幻 */
.ancientBook{
  width:100%;
  margin-top:10px;
}

/**穿越 */
.passBook{
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