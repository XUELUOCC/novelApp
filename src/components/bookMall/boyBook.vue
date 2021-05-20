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
            <van-grid-item v-for="(item,index) in concentrationList" :key="item.index" @click="getIssueBookDetail(index)">
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
            <div class="XuanHuanBookList">
              <van-list
              v-model="loadingX"
              :finished="finishedX"
              finished-text=""
              @load="onLoadX">
                <div class="bookInfo" v-for="(item,index) in XuanHuanList" :key="item.index" @click="getXuHuanBookContent(index)">
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

         <div class="systemBook">
            <van-cell value="查看更多" is-link @click="getSystemBook">
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title titles">{{systemBookText}}</span>
              </template>
            </van-cell>
            <div class="systemBookList">
              <van-list
              v-model="loadingX"
              :finished="finishedX"
              finished-text=""
              @load="onLoadX">
                <div class="bookInfo" v-for="(item,index) in systemBookList" :key="item.index" @click="getSystemBookContent(index)">
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
            loadingX: false,
            finishedX: false,
            issueText:'本期精品',
            cityBookText:'都市爽文',
            XuanHuanText:'玄幻无敌',
            systemBookText:'金手指系统',
            guruObj:{
              name:'圣墟',
              introduct:'一本好书',
              author:'辰东',
            },
            concentrationList:[
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
            ],
            systemBookList:[
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
        //点击本期主打小说
        getIssueBookDetail(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        getBookDetailOne(){
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
        getXuHuanBookContent(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        getSystemBookContent(index){
          this.$router.push({name:'bookDetail',params:{id:'123'}})
        },
        //本期精品
        getIssue(){
             this.$router.push({name:'bookList',params:{title:this.issueText}})
        },
        //都市爽文
        getCityBook(){
          this.$router.push({name:'bookList',params:{title:this.cityBookText}})
        },
        //玄幻无敌
        getXuanHuan(){
           this.$router.push({name:'bookList',params:{title:this.XuanHuanText}})
        },
        //金手指系统
        getSystemBook(){
            this.$router.push({name:'bookList',params:{title:this.systemBookText}})
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

/**金手指系统 */
.systemBook{
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