<template>
  <div class="bookContent">
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
        <van-nav-bar title="" left-text="" left-arrow>
          <template #right>
            <div class="navBarRight">
              <van-tag size="medium" text-color="#fff" color="#161614">刷新</van-tag>
              <van-popover
                v-model="showPopover"
                placement="bottom-end"
                theme="dark"
                trigger="click"
                :actions="actions"
              >
                <template #reference>
                  <img src="../assets/bookContent/detailMore.png" alt="">
                </template>
              </van-popover>
            </div>
          </template>
        </van-nav-bar>
      </div>
    </van-popup>
    <van-popup v-model="show" position="bottom" :overlay="false" :style="{ height: '15%' }" >
      <div>bbbbbb</div>
    </van-popup>
  </div>
</template>
<script>
import turn from "../../public/lib/turn";

export default {
  name: "FenMian2",
  data() {
    return {
      value: "",
      page: 1,
      show:false,
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
      ]
    };
  },
  mounted() {
    this.loadTurn()
  },
  methods: {
    //设置是否显示设置内容
    showSetting(){
      this.show=!this.show
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
  height:80%;
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
.navBarRight /deep/ .van-popover__wrapper img{
  margin-left:5px;
  height:40%;
}
</style>
