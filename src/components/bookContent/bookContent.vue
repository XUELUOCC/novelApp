<template>
  <div class="bookContent" ref="bookContent">
    <div id="magazine">
      <div v-for="(item, index) in allPages" :key="`test_${index}`">
          <div class="text">
            第{{index+1}}页
        </div>
      </div>
    </div>

    <div class="left"></div>  <!--上一页-->
    <div class="centerSetting" @click="showSetting"></div>  <!--显示设置-->
    <div class="right"></div> <!--下一页-->

    <!--设置内容-->
    <van-popup v-model="show" position="top" :overlay="false" :style="{ height: '8%' }" >
      <div class="settingTop">
        <van-nav-bar title="" left-text="" left-arrow @click-left="onClickLeft">
          <template #right>
            <div class="navBarRight">
              <van-tag size="medium" text-color="#fff" color="#161614">刷新</van-tag>
              <van-popover
                v-model="showPopover"
                placement="bottom-end"
                theme="dark"
                trigger="click"
                :offset="[20,10]"
                :actions="actions"
              >
                <template #reference>
                  <div class="detailIcon">
                    <!-- <img src="../../assets/bookContent/detailMore.png" alt=""> -->
                    <van-icon name="weapp-nav" />
                  </div>
                  
                </template>
              </van-popover>
            </div>
          </template>
        </van-nav-bar>
      </div>
    </van-popup>
    <van-popup v-model="show" position="bottom" :overlay="false" :style="{ height: '15%' }" >
      <div class="bottomContent">
        <div class="bottomContentTop">
          <div class="topLeft">上一章</div>
          <div class="topCenter">|</div>
          <div class="topRight">下一章</div>
        </div>
        <div class="bottomContainerBottom">
          <div class="bottomContentBottom">
            <div class="item" v-for="(item,index) in settingList" :key="index" @click="getSettingBar(item)">
              <img :src="item.imgSrc" alt="">
              <span>{{item.name}}</span>
            </div>
          </div>
         
        </div>
      </div>
    </van-popup>

    <!--点击设置出现的设置选项-->
    <div class="getSetting" v-if="showSettingContent">
      <div class="light">
        <div class="lightLeft">
          <img src="../../assets/bookContent/light.png" alt="">
          <div class="lightSilder">
            <van-slider v-model="value" :min="0" :max="100" active-color="#aaaaaa" />
          </div>
          <img src="../../assets/bookContent/lightFinished.png" alt="">
        </div>
        
      </div>
    </div>
  
  </div>
</template>
<script>
import turn from "../../../public/lib/turn";

export default {
  name: "bookContent",
  data() {
    return {
      value:100,  //设置亮度范围
      bookTitle:'',
      page: 1,
      show:false,
      showSettingContent:false,
      showPopover: false,
      actions: [{ text: '书籍详情' }],
      allPages: [
        {
          page: 1,
          name: "aa"
        },
        {
          page: 2,
          name: "aa"
        },
        {
          page: 3,
          name: "aa"
        },
        {
          page: 4,
          name: "aa"
        },
        {
          page: 5,
          name: "aa"
        },
        {
          page: 6,
          name: "aa"
        }
      ],
      settingList:[
        {
          name:'目录',
          imgSrc:require('../../assets/bookContent/catalogue.png')
        },
         {
          name:'听书',
          imgSrc:require('../../assets/bookContent/earphone.png')
        },
         {
          name:'缓存',
          imgSrc:require('../../assets/bookContent/cache.png')
        },
         {
          name:'设置',
          imgSrc:require('../../assets/bookContent/setting.png')
        },
      ]
    };
  },
  mounted() {
    //设置value的值，以便使用在style中
    // this.$refs.bookContent.style.setProperty('opacity',this.value)

    this.bookTitle=this.$route.params.bookName
    this.loadTurn()
  },
  methods: {
    onClickLeft(){
        console.log('返回')
        this.$router.back(-1)
    },
     // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.getSetting');
    },
    //设置是否显示设置内容
    showSetting(){
      this.show=!this.show
      this.showSettingContent=false;
    },
    //去往四个书籍设置页面
    getSettingBar(item){
      if(item.name=="目录"){
        this.$router.push({name:'bookCatalogue',params:{bookName:this.bookTitle}})
      }else if(item.name=="设置"){
        this.showSettingContent=!this.showSettingContent;
      }
    },
    //设置turn.js，设置页面的翻页效果
    loadTurn(){
      let that=this;
      $(function () {
          $('#magazine').turn({ 
            display: "single",
            duration:800,
            gradients: true, 
            acceleration: true,
            when: {
                turned: function(e, page, pages) {
                  console.log(page)
                  console.log(pages)
                  //当前页
                  console.log("Current view: ", $(this).turn("view")[0]);
                  //总页数
                  console.log(
                    "#magazine has " + $("#magazine").turn("pages") + " pages"
                  );
                }
            }
          });
          //上一页
          $('.left').bind("touchend",function(){
            that.show=false;
            var pageCount = $("#magazine").turn("pages");//总页数
            let currentPage = $("#magazine").turn("page");//当前页
            if (currentPage >= 2) {
              $("#magazine").turn('page', currentPage - 1);
            } else {
              that.$toast('已经是第一页了')
              return false
            }
          })
          //下一页
          $('.right').bind("touchend",function(){
             that.show=false;
            var pageCount = $("#magazine").turn("pages");//总页数
            let currentPage = $("#magazine").turn("page");//当前页
            if (currentPage < pageCount) {
              $("#magazine").turn('page', currentPage + 1);
            } 
            if(currentPage == pageCount){
                that.$toast('已经是最后一页了')
                return false
              }
          })
      });
    },
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.bookContent{
  width:100%;
  height:100%;
}
#magazine {
  width:100%;
  height:100%;
}
#magazine .page{
    background-color:#e6e3dc;  //设置翻页和每一页的底色
    // border:1px solid Red;
}
.left{
  width:35%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  z-index:999;
}
.right{
  width:35%;
  height:100%;
  position:absolute;
  right:0;
  top:0;
  z-index:999;
}
.centerSetting{
  width:30%;
  height:100%;
  position:absolute;
  right:35%;
  top:0;
  z-index:999;
}

/**设置 */
.settingTop{
  width:100%;
  height:100%;
}
.detailIcon{
  // width:15px;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detailIcon img{
  margin-left:5px;
  height:40%;
}
.bookContent /deep/ .van-popup{
  background-color:#161614;
}
.settingTop /deep/ .van-nav-bar{
  background-color:#161614;
  height:100%;
}
.settingTop /deep/ .van-nav-bar .van-icon{
  color:#fff;
}
.settingTop /deep/ .van-nav-bar__content{
  height:100%;
}
.navBarRight /deep/ .van-tag{
  border:1px solid #fff;
  border-radius: 4px;
}
.navBarRight{
  width:60px;
  height:80%;
  padding:15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBarRight /deep/ .van-popover__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
// .navBarRight /deep/ .van-popover__wrapper img{
//   margin-left:5px;
//   height:40%;
// }

/**设置bottom */
.bottomContent{
  width:100%;
  height:100%;
  margin:0 auto;
}
.bottomContentTop{
  width:100%;
  height:50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topLeft,.topRight{
  width:45%;
  height:100%;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items:center;
}
.topCenter{
  width:5%;
  height:100%;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items:center;
}
.bottomContainerBottom{
  width:100%;
  height:49%;
  border-top:1px solid #fff;
}
.bottomContentBottom{
  width:100%;
  height:100%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item{
  width:25%;
  height:80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item img{
  height:50%;
}
.item span{
  color:#fff;
}

/**挂载显示的设置dom */
.getSetting{
  position:fixed;
  bottom:15%;
  z-index:2002;
  width:100%;
  height:150px;
  border-bottom:1px solid #fff;
  background-color:#161614;
}
.light{
  width:90%;
  height:20%;
  margin:10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lightLeft{
  width:65%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lightLeft img{
  height:80%;
}
.lightLeft .lightSilder{
  width:60%;
}
.lightSilder /deep/ .van-slider__button{
  width:15px;
  height:15px;
  background-color:#fd436a;
}
</style>
