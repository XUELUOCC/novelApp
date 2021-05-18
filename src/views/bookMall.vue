<template>
  <div>
    <div class="top">
      <div class="topContent">
        <van-search 
        background="#4d484e"
        left-icon="" 
        right-icon="search" 
        v-model="searchValue" 
        placeholder="请输入搜索关键词" 
        @click="search" />
      </div>
    </div>

    <div class="tabContent">
      <van-tabs  v-model="active" sticky offset-top="80px" background="#4d484e" title-active-color="red" title-inactive-color="red">
        <van-tab title="精选">
          <div class="iconList">
            <div class="rankList imgs">
              <img src="../assets/bookMall/rabkList.png" alt="">
              <span>排行榜</span>
            </div>
            <div class="newBook imgs">
              <img src="../assets/bookMall/newBook.png" alt="">
              <span>新书榜</span>
            </div>
            <div class="bookFinish imgs">
              <img src="../assets/bookMall/bookFinish.png" alt="">
              <span>完结榜</span>
            </div>
            <div class="bookWaste imgs">
              <img src="../assets/bookMall/bookWaste.png" alt="">
              <span>书荒</span>
            </div>
          </div>
          <div class="tips"></div>
          <div class="cellBook">
            <van-cell value="查看更多"  is-link>
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title titles">大神作品，强力推荐</span>
              </template>
            </van-cell>
            <div class="bookInfo">
              <div class="infoLeft">
                <img src="../assets/bookShelf/novelPage.jpg" alt="">
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
                <van-grid-item v-for="(item,index) in guruList" :key="item.index" @click="getBookDetail(index)">
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
        </van-tab>
        <van-tab title="男生">内容 2</van-tab>
        <van-tab title="女生">内容 3</van-tab>
        <van-tab title="有声书">内容 4</van-tab>
      </van-tabs>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'bookMall',
  data(){
      return{
        searchValue:'',
        active:0,
        guruList:[
          {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
        ]
      }
  },
  mounted(){

  },
  methods:{
      search(){
        console.log('search')
      },
      //点击小说
      getBookDetail(index){

      }
  }
}
</script>

<style scoped>
/**top区域search搜索 */
.top{
  width:100%;
  height:12%;
  /* border:1px solid red; */
  background-color:#4d484e;
  overflow: hidden;
  position:fixed;
  top:0;
  z-index:999;
}
.topContent{
  width:95%;
  height:20%;
  margin:10px auto;
}
div /deep/.van-search__content{
  background-color: #707070;
}

/**input 的placeholder的颜色 */
div /deep/.van-field__control:-ms-input-placeholder {
    color: #fff;
}/* Internet Explorer 10+ */

div /deep/.van-field__control::-webkit-input-placeholder {
    color: #fff;
}/* WebKit browsers */

div /deep/.van-field__control::-moz-placeholder {
    color: #fff;
}/* Mozilla Firefox 4 to 18 */

div /deep/.van-field__control:-moz-placeholder {
    color: #fff;
}/* Mozilla Firefox 19+ */

.van-field__right-icon{
  color:#fff;
}


/**tab区域--精选 */
div /deep/.van-tabs__nav--line{
  height:90%;
  /* position:fixed;
  top:0; */
  /* z-index:999; */
}
.titles{
  font-size:16px;
  font-weight:700;
}
.tabContent{
  width:100%;
  margin:21% auto 0;
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
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.infoLeft{
  width:30%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.infoLeft img{
  width:80%;
}
.infoRight{
  width:68%;
  height:100%;
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
</style>