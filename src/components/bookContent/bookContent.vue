<template>
  <div class="bookContent" >
    <!--仿真翻页--><!--必须使用v-if，实现组件的创建和销毁，使用v-show将会导致turn.js出现bug，原因可能是tuen.js中使用了多个display:none的缘故-->
    <div v-if="turnFlag" class="turnContainer">
      <div id="magazine" ref="bookContent">
        <div v-for="(item, index) in allPages" :key="`test_${index}`">
            <div class="text" :style="{fontSize:fontSize+'px',lineHeight:lineHeight+'px',backgroundColor:backgroundColor}">
              第{{index+1}}章 <br>
              <br>
              第{{index+1}}页 <br>
              第{{index+1}}页 <br>
              第{{index+1}}页 <br>
              第{{index+1}}页 <br>
            </div>
        </div>
      </div>

      <div class="leftTurn" ></div>  <!--上一页-->
      <div class="centerSetting" @touchstart="showSetting"></div> 
      <div class="rightTurn" ></div> <!--下一页-->
    </div>

    <!--滚屏翻页-->
    <div v-if="rollScreenFlag" class="rollScreen">
      <van-list
      style="width:100%;height:100%;"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
        <div 
        v-for="(item,index) in allPages"
        :key="index"
        class="text" 
        @touchstart="showSetting"
        :style="{fontSize:fontSize+'px',lineHeight:lineHeight+'px',backgroundColor:backgroundColor}"
        >
          第{{index+1}}章 <br>
          <br>
          第{{index+1}}页 <br>
          第{{index+1}}页 <br>
          第{{index+1}}页 <br>
          第{{index+1}}页 <br>
        </div>
      </van-list>
    </div>

    <!--无翻页效果-->
    <div v-show="normalTurnFlag" class="normalTurnContent">
      <div 
        class="normalText" 
        :style="{fontSize:fontSize+'px',lineHeight:lineHeight+'px',backgroundColor:backgroundColor}"
        >
        <h3>{{pageDataNormal.title}}</h3>
        <pre>{{pageDataNormal.pageData}}</pre>
      </div>
      
      <div class="settingNormalLeft"  @touchstart="turnLeftNormal()"></div>
      <div class="settingNormalCenter"   @touchstart="turnSettingNormal()"></div>
      <div class="settingNormalRight"  @touchstart="turnRightNormal()"></div>
    </div>


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
                @select="selectDetail"
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
            <van-slider v-model="value" :min="50" :max="100" active-color="#aaaaaa" @input="setLightRange"/>
          </div>
          <img src="../../assets/bookContent/lightFinished.png" alt="">
        </div>
        <div class="lightRight">
          <span>系统字体></span>
        </div> 
      </div>
      <div class="fontIcon">
        <div class="fontIconLeft">
          <span class="fontReduce" @touchstart="fontReduce">A-</span>
          <span class="fontCenter">{{fontSize}}</span>
          <span class="fontAdd" @touchstart="fontAdd">A+</span>
        </div>
        <div class="fontIconCenter"></div>
        <div class="fontIconRight">
          <div class="spaceSmall" @touchstart="spaceAdd">
            <van-icon name="plus" color="#ea516d" size="24"/>
          </div>
          <div class="spaceCenter">间距</div>
          <div class="spaceBig" @touchstart="spaceReduce">
            <van-icon name="minus" color="#ea516d" size="24" />
          </div>
        </div>
      </div>
      <div class="turnContent">
        <span>翻页效果</span>
        <span 
        v-for="(item,index) in turnMethodsList" 
        :key="index" 
        :class="[index==turnIndex ?'activeTurn' :'']" 
        @touchstart="setTurnMethods(item,index)"
        >{{item.name}}</span>
      </div>
      <div class="bgContent">
        <span class="bgText">背景颜色</span>
        <div class="bg1" v-for="(item,index) in bgList" :key="index" @touchstart="setBgColor(item)">
          <van-icon name="checked" :color="item.bgColor" size="40"/>
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
      value:50,  //设置亮度范围
      bookTitle:'',
      turnFlag:true,  //判断是仿真翻页
      rollScreenFlag:false,//判断是滚屏翻页
      normalTurnFlag:false,//判断没有翻页效果
      turnIndex:0,  //判断点击的是否是当前翻页效果，是赋值样式class
      normalTurnIndex:-1,//判断无翻页效果中点击的是否是当前页，是当前页，，赋值样式class
      pageDataNormal:{},//无翻页效果时，显示的页面数据
      normalPageIndex:0, //判断无效果翻页时，确定是第几页，一个过渡index
      novelData:[    //模拟请求数据后，处理过后的内容
        {
          title:'第一章',
          pageData:'第一页内容。。。。。',
        },
        {
          title:'第一章',
          pageData:'第二页内容。。。。。',
        },
        {
          title:'第一章',
          pageData:'第三页内容。。。。。',
        },
        {
          title:'第一章',
          pageData:'第四页内容。。。。。',
        },
      ],
      loading: false,
      finished: false,
      fontSize:18,
      lineHeight:24,
      displayMethods:'block',
      backgroundColor:'#e6e3dc',
      bgList:[
        {
          bgColor:'#e3e4de',
        },
        {
          bgColor:'#ded9bb'
        },
        {
          bgColor:'#bcd0cf'
        },
        {
          bgColor:'#e6e3dc'
        }
      ],
      turnMethodsList:[
        {
          name:'仿真'
        },
        {
          name:'滚屏'
        },
        {
          name:'无'
        }
      ],
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
    //无效果时的左侧翻页
    turnLeftNormal(){
      this.normalPageIndex--;
      if(this.normalPageIndex<=0){
        this.normalPageIndex=0;
      }
      this.pageDataNormal=this.novelData[this.normalPageIndex]   //获取第几页数据
      this.show=false
      this.showSettingContent=false;
    },
    //无效果时的右侧翻页
    turnRightNormal(){
      this.normalPageIndex++;
      console.log(this.normalPageIndex)
      if(this.normalPageIndex>=(this.novelData.length-1)){
        this.normalPageIndex=this.novelData.length-1;  //测试方法，此时只请求一章数据
        //之后，大于此数据，说明此章已读完，请求下一章数据
        //加载下一章数据
      }
      this.pageDataNormal=this.novelData[this.normalPageIndex]   //获取第几页数据
      this.show=false
      this.showSettingContent=false;
    },
    //无效果时的收起设置栏
    turnSettingNormal(){
      console.log('aaaaaaa')
      this.show=!this.show;
      this.showSettingContent=false
    },
    //点击翻页效果
    setTurnMethods(item,index){
      if(item.name=='仿真'){
        this.turnFlag=true;
        this.rollScreenFlag=false;
        this.normalTurnFlag=false;
        this.turnIndex=index;
        this.$nextTick(()=>{
           this.loadTurn();
        })
       
      }else if(item.name=='滚屏'){
        this.turnFlag=false;
        this.rollScreenFlag=true;
        this.normalTurnFlag=false;
        this.turnIndex=index;
      }else if(item.name=='无'){
        this.turnFlag=false;
        this.rollScreenFlag=false;
        this.normalTurnFlag=true;
        this.turnIndex=index;
        //初始化无效果时的页面数据
        this.pageDataNormal=this.novelData[0]
         this.normalPageIndex=0;
      }
    },
    //滚屏的list加载
    onLoad(){
      this.loading=false;
      this.finished=false;
    },
    //点击书籍详情
    selectDetail(action,number){
      console.log(action,number)
      if(action.text=='书籍详情'){
        this.$router.push({name:'bookDetail',params:{name:this.bookTitle}})
      }
    },
    //字体减少
    fontReduce(){
      this.fontSize=this.fontSize-1
    },
    //字体增加
    fontAdd(){
      this.fontSize=this.fontSize+1
    },
    //间距减少
    spaceReduce(){
      this.lineHeight=this.lineHeight-1;
      if(this.lineHeight<=18){
       this.lineHeight=18
      }
    },
    //间距增加
    spaceAdd(){
      this.lineHeight=this.lineHeight+1;
       if(this.lineHeight>=30){
        this.lineHeight=30
      }
    },
    //修改背景颜色
    setBgColor(item){
      this.backgroundColor=item.bgColor;
    },
    //通过进度条控制页面的高亮显示
    setLightRange(value){
      this.$refs.bookContent.style.opacity=value/100;
    },
    //设置是否显示设置内容
    showSetting(){
      console.log('aaa')
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
      // $(function () {
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
          $('.leftTurn').bind("touchend",function(){
            that.show=false;
            that.showSettingContent=false;
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
          $('.rightTurn').bind("touchend",function(){
            console.log('ccccc')
            that.show=false;
            that.showSettingContent=false;
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
      // });
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
.turnContainer{
  width:100%;
  height:100%;
  overflow:hidden;
}
.rollScreen{
  width:100%;
  height:100%;
}
.normalTurnContent{
  width:100%;
  height:100%;
  overflow: hidden;
  position:relative;
}
.normalText{
  background-color:#e6e3dc;
  font-size:18px;
  line-height:24px;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  z-index:999;
}
.normalItem{
  // width:70%;
  display: none;
  transition:2s;
}
.settingNormalLeft{
  position:absolute;
  width:35%;
  height:100%;
  top:0;
  left:0;
  z-index:1000;
}
.settingNormalRight{
  position:absolute;
  width:35%;
  height:100%;
  top:0;
  right:0;
  z-index:1000;
}
.settingNormalCenter{
  position:absolute;
  width:30%;
  height:100%;
  top:0;
  left:35%;
  z-index:1000;
}
#magazine {
  width:100%;
  height:100%;
  opacity: 0.5;
}
#magazine .page{
    background-color:#e6e3dc;  //设置翻页和每一页的底色
    // border:1px solid Red;
}
.text{
  background-color:#e6e3dc;
  font-size:18px;
  line-height:24px;
  width:100%;
  height:100%;
}
.leftTurn{
  width:35%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  z-index:999;
}
.rightTurn{
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
  height:180px;
  border-bottom:1px solid #fff;
  background-color:#161614;
}
.light{
  width:85%;
  height:20%;
  margin:10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lightLeft{
  width:70%;
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
.lightRight{
  width:30%;
  height:100%;
  display: flex;
  justify-content: flex-end;
  align-items:center;
}
.lightRight span{
  color:#567bd6;
}
.fontIcon{
  width:85%;
  height:20%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fontIconLeft,.fontIconRight{
  width:45%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.fontIconCenter{
  width:1px;
  height:100%;
  background-color:#fff;
}
.fontReduce,.fontAdd{
  color:#ea516d;
  font-size:24px;
}
.fontCenter{
  color:#fff;
  font-size:18px;
}
.spaceCenter{
  color:#fff;
  // font-size:1px;
}
.spaceSmall,.spaceCenter,.spaceBig{
  display:flex;
  justify-content: center;
  align-items: center;
}
.turnContent{
  width:85%;
  height:20%;
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.turnContent span{
  color:#fff;
  font-size:12px;
  margin-right:25px;
}
.activeTurn{
  color:#567bd6!important;
}
.bgContent{
  width:85%;
  height:25%;
  margin:0 auto;
  display:flex;
  justify-content: flex-start;
  align-items:center;
}
.bgText{
  color:#fff;
  margin-right:15px;
}
.bg1{
  font-size:18px;
  margin-right:15px;
  display:flex;
  justify-content: center;
  align-items:center;
}
</style>
