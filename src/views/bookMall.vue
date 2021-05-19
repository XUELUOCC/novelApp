<template>
  <div>
    <div class="top">
      <div class="topContent">
        <van-search 
        background="#4d484e"
        left-icon="" 
        right-icon="search" 
        v-model="searchValue" 
        placeholder="输入书名" 
        @click="search" />
      </div>
    </div>

    <div class="tabContent">
      <van-tabs  v-model="active" sticky offset-top="80px" background="#4d484e" title-active-color="red" title-inactive-color="red">
        <van-tab title="精选">
          <concentration></concentration>
        </van-tab>
        <van-tab title="男生">
          <boyBook></boyBook>
        </van-tab>
        <van-tab title="女生">
          <girlBook></girlBook>
        </van-tab>
        <van-tab title="有声书">
          <sound></sound>
        </van-tab>
      </van-tabs>
    </div>
    
  </div>
</template>

<script>
import concentration from '@/components/bookMall/concentration.vue'
import boyBook from '@/components/bookMall/boyBook.vue'
import girlBook from '@/components/bookMall/girlBook.vue'
import sound from '@/components/bookMall/haveSound.vue'
export default {
  name:'bookMall',
  components:{
    concentration,
    boyBook,
    girlBook,
    sound
  },
  data(){
      return{
        searchValue:'',
        active:0,
        loading: false,
        finished: false,
        loadingX: false,
        finishedX: false,
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
        ],
        networkList:[
           {
            name:'圣墟',
            rank:'TOP1',
            class:'item1',
            author:'醉不乖',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            rank:'TOP2',
            class:'item2',
            author:'醉不乖',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            rank:'TOP3',
            class:'item3',
            author:'醉不乖',
            src:require('../assets/bookShelf/novelPage.jpg')
          },  
           {
            name:'圣墟',
            rank:'TOP4',
            class:'item4',
            author:'醉不乖',
            src:require('../assets/bookShelf/novelPage.jpg')
          },   
        ],
        cityBookList:[
          {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },    
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },    
        ],
        XuanHuanList:[
          {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },    
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
            src:require('../assets/bookShelf/novelPage.jpg')
          },
           {
            name:'圣墟',
            author:'辰东',
            introduct:'圣墟的简介',
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
      getCityBook(index){

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

div /deep/.van-field__right-icon{
  color:#fff;
}


/**tab区域--精选 */
div /deep/.van-tabs__nav--line{
  height:90%;
}
.tabContent{
  width:100%;
  margin:21% auto 0;
}

</style>