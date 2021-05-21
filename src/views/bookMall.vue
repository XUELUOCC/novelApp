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
      <van-tabs  
      v-model="active" 
      sticky offset-top="80px" 
      background="#4d484e" 
      title-active-color="red" 
      title-inactive-color="red"
      @click="clickTabs"
      >
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
        saveActive:0,
        inject: ['reload'],  // 注入重载的功能（注入依赖）
      }
  },
  watch:{

  },
  mounted(){
    // console.log('mounted')
    this.active=this.$store.state.active
  },
  methods:{
      search(){
        console.log('search')
      },
      clickTabs(name,title){
        this.$store.commit('saveActive',this.active)
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