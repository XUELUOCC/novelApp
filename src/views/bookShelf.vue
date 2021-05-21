<template>
  <div class="container">
    <div class="topContainer">
      <div class="top">
        <div class="left">
          <div class="avatar" @click="getSetting"></div>
        </div>
        <div class="right">
          <div class="rightOne">
            <router-link to="/readingLog">阅读记录</router-link>
          </div>
          <div class="rightTwo">
            <!-- <select-feids :text="text"></select-feids> -->
            <van-popover
              v-model="showPopover"
              trigger="click"
              placement="bottom-end"
              :actions="actions"
              @select="onSelect"
            >
              <template #reference>
               <span>编辑书架</span>
              </template>
            </van-popover>
          </div>
        </div>
      </div>

      <div class="search">
        <van-search v-model="searchText" placeholder="请输入搜索关键词" />
      </div>

      <div class="content">
        <div class="contentTop">
          <div class="contentTopContainer">
            <div class="contentTopLeft">
              <img src="../assets/bookShelf/recommend.png" alt="">
              <span>荐</span>
            </div>
            <div class="contentTopRight">运气爆棚，首充就是特等奖</div>
          </div>   
        </div>
      </div>

    </div>
    

    <div class="contentContainer">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <div v-if="!showTable">
        <div class="cell" v-for="(item,index) in list" :key="item.index" @click="getNovelContent(index)">
          <div class="cellLeft">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="cellCenter">
            <div class="name">{{item.name}}</div>
            <div class="noticeText">{{item.noticeText}}</div>
            <div class="tipsUpdate">{{item.tipsUpdate}}</div>
          </div>
          <div class="cellRight">
            <p>{{item.time}}</p>
          </div>
        </div>
      </div>
      <div class="cellAdd" v-if="!showTable">
        <div class="cellAddLeft">
          <div class="addNovel" @click="getNovel">
            <span >
              <van-icon name="plus" color="#ededed" />
            </span>
          </div>
        </div>
        <div class="cellAddRight">
          <p>添加你喜欢的小说</p>
        </div>
      </div>
      
      <!--书架模式-->
      <div class="listTable" v-if="showTable">
        <van-grid :border="false" :column-num="3" :gutter="10">
          <van-grid-item v-for="(item,index) in list" :key="item.index"  @click="getNovelContent(index)">
            <van-image :src="item.imgUrl" />
            <span class="tableNovelName">{{item.name}}</span>
          </van-grid-item>
          <van-grid-item >
            <div class="tableAddNovel" @click="getNovel">
              <span class="spanAdd">
                <van-icon name="plus" color="#ededed" />
              </span>
            </div>
            <span class="spanPass"></span>
          </van-grid-item>
        </van-grid>
      </div>

      
      </van-list>
    </div>

    <!--弹出层-->
    <van-popup v-model="show" position="left" style="width:60%;height:100%;" >
      <div class="setting">
        <div class="settingAvatar">
          <div class="settingAvatarContent">
            <div class="settingLeft">
              <div class="head">
              </div>
            </div>
            <div class="settingRight">
              <div class="settingRightContent">
                <div class="settingId">ID:1224593</div>
                <van-tag round type="danger" @click="getLogin">绑定账号</van-tag>
              </div> 
            </div>
          </div> 
        </div>

        <div class="tips"></div>
        <div class="settingList">
          <div class="settingListContent">
            <van-cell 
            size="large" 
            v-for="item in settingList" 
            :key="item.index" 
            :title="item.name" 
            is-link 
            :to="item.url"
            > 
              <template #title>
                <img :src="item.src" alt="" style="width:20px;height:20px;margin-right:10px;">
                <span class="custom-title">{{item.name}}</span>
              </template>
            </van-cell>
          </div>
          
        </div>

      </div>
    </van-popup>

    
  </div>
</template>

<script>
import selectFeids from '../components/select.vue'
export default {
  components:{
    selectFeids
  },
  name: "bookShelf",
  data(){
    return{
      text:'编辑书架',
      showPopover:false, //vant的气泡选择框是否展示
      showTable:false,//小说列表的格式选择显示
      actions: [{ text: '封面模式' }, { text: '编辑书架' }],
      searchText:"",
      loading: false,
      finished: false,
      show:false,
      list: [
        {
          imgUrl:require('../assets/bookShelf/novelPage.jpg'),
          name:'逆天邪神',
          noticeText:'最新：章节更新通知',
          tipsUpdate:'第二章',
          time:'1周前'
        },
        {
          imgUrl:require('../assets/bookShelf/novelPage.jpg'),
          name:'逆天邪神',
          noticeText:'最新：章节更新通知',
          tipsUpdate:'第二章',
          time:'1周前'
        },
        {
          imgUrl:require('../assets/bookShelf/novelPage.jpg'),
          name:'逆天邪神',
          noticeText:'最新：章节更新通知',
          tipsUpdate:'第二章',
          time:'1周前'
        },
        {
          imgUrl:require('../assets/bookShelf/novelPage.jpg'),
          name:'逆天邪神',
          noticeText:'最新：章节更新通知',
          tipsUpdate:'第二章',
          time:'1周前'
        },
      ],
      settingList:[
        {
          name:'阅读记录',
          url:'/readingLog',
          src:require('../assets/bookShelf/read.png'),
          value:''
        },
        {
          name:'音频记录',
          url:'',
          src:require('../assets/bookShelf/read.png'),
          value:''
        },
        {
          name:'缓存管理',
          url:'',
          src:require('../assets/bookShelf/cache.png'),
          value:''
        },
        {
          name:'设置',
          url:'/setting',
          src:require('../assets/bookShelf/setting.png'),
          value:''
        },
      ]
    }
  },
  mounted(){
    this.show=this.$store.state.show
  },
  methods:{
    //列表的数据加载
    onLoad(){
      // console.log('aaaa')
      this.loading=false;
      this.finished = true;
    },
    //点击头像出现设置
    getSetting(){
      this.show=true;
      this.$store.commit('saveShow',this.show)
    },
    //点击编辑书架气泡选择框
    onSelect(action) {
      // console.log(action.text);
      if(action.text=="编辑书架"){
        this.$router.push('/editBookShelf')
      }else if(action.text=="封面模式"){
        this.showTable=!this.showTable;
      }
    },
    getNovel(){
      this.$router.push('/bookMall')
    },
    //进入小说详情页面
    getNovelContent(index){

    },
    getLogin(){
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
.container{
  width:100%;
  background-color:rgb(240,240,250);
  overflow: hidden;
}
.topContainer{
  width:100%;
  /* height:100px; */
  background-color:rgb(240,240,250);
  position:fixed;
  top:0;
  z-index:999;
}
.top{
  width:100%;
  height:35px;
  margin-top:10px;
  /* border:1px solid red; */
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.left,.right{
  width:50%;
  height:100%;
}
.left{
  display:flex;
  align-items:center;
}
.left .avatar{
  width:30px;
  height:30px;
  border-radius: 50%;
  /* border:1px solid red; */
  margin-left:0.15rem;
  background-image:url('../assets/bookShelf/avatar.png') ;
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.right{
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.rightOne,.rightTwo{
  width:50%;
  height:30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rightOne a{
  display: inline-block;
  font-size:0.12rem;
  color:#333;
  width:100%;
  height:100%;
  line-height:30px;
  text-align: center;
}

/**搜索框 */
.search{
  width:100%;
  /* height:0.45rem; */
}
.van-search{
  background-color:transparent!important;
}
.van-search__content{
  background-color:#fff!important;
  border-radius: 50px;
}

/**内容 */
.content{
  width:100%;
  height:auto;
  margin:0px auto 0;
  background-color:#fff;
  /* overflow: hidden; */
}


.contentTopContainer{
  width:90%;
  height:100%;
  margin:0 auto;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}
.contentTop{
  width:100%;
  height:30px;
  margin:0 auto;
  border:1px solid #ededed;
}
.contentTopLeft{
  width:10%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contentTopLeft img{
  width:60%;
  height:60%;
}
.contentTopLeft span{
  margin-left:2px;
  color:#fa4f21;
}
.contentTopRight{
  width:80%;
  height:100%;
  margin-left:20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/**内容的小说列表 */
.contentContainer{
  width:100%;
  background-color:#fff;
  margin-top:150px;
}
.cell{
  width:90%;
  /* height:120px; */
  padding:10px 22px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #ededed
}
.cellLeft{
  width:30%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cellLeft img{
  width:90%;
  /* height:80%; */
}
.cellCenter{
  width:50%;
  height:80%;
  padding-top:15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.cellCenter .name{
  font-size:16px;
}
.cellCenter .noticeText{
  margin-top:15px;
  color:#737373;
}
.cellCenter .tipsUpdate{
  margin-top:15px;
  color:#ffd5a8
}
.cellRight{
  width:20%;
  height:80%;
  padding-top:15px;
}
.cellRight p{
  width:80%;
  margin:0 auto;
  text-align: right;
  color:#737373;
}

/**小说的列表格式2 */
.listTable{
  width:95%;
  margin:0 auto;
}
.tableNovelName{
  margin-top:10px;
}
.tableAddNovel{
  width:100%;
  height:80%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-shadow:0px 3px  3px 3px #e4e4e4;
}
.spanAdd{
  color:#adadad;
  font-size:24px;
}
.spanPass{
    width:100%;
    height:24px;
}

/**添加小说 */
.addNovel{
  width:80%;
  height:80%;
  box-shadow:0px 3px  3px 3px #e4e4e4;  /**  box-shadow:0px(上边阴影距离) 3px(下边阴影距离)  3px(阴影模糊距离) 3px(左右阴影距离) #e4e4e4;  */
  display: flex;
  justify-content: center;
  align-items: center;
}
.addNovel span {
  color:#adadad;
  font-size:24px;
}
.cellAdd{
  width:95%;
  height:150px;
  padding:10px 18px;
  margin:0 auto;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom:1px solid #ededed
}
.cellAddLeft{
  width:31%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cellAddRight{
  width:50%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cellAddRight p{
  color:#797979;
}

/**点击头像出现设置 */
.setting{
  width:100%;
  height:100%;
  overflow: hidden;
}
.settingAvatar{
  width:100%;
  height:15%;
  /* margin-top:20px; */
  background-color:#fff;
}
.settingAvatarContent{
  width:90%;
  height:100%;
  margin:0 auto;
  display:flex;
  justify-content: flex-start;
  align-items: center;
}
.settingLeft{
  width:20%;
  height:80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head{
  width:35px;
  height:35px;
  border-radius: 50%;
  background-image:url('../assets/bookShelf/avatar.png') ;
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.van-tag{
  padding:0 8px;
}
.head span{
  font-size:26px;
}
.settingRight{
  width:80%;
  height:80%;
  margin-left:10px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
}
.settingRightContent{
  width:auto;
  height:35px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-start;
}

/**设置列表 */
.settingList{
  width:100%;
  height:80%;
  background-color:#fff;
  overflow: hidden;
}
.settingListBottom{
  width:100%;
  height:40%;
  background-color:#fff;
  border:1px solid red;
  overflow: hidden;
}
.settingListContent{
  width:90%;
  height:100%;
  margin:0 auto;
}
.van-cell__title{
  display:flex;
  align-items: center;
}

/**设置中的间隙div */
.tips{
  width:100%;
  height:2%;
  background-color:rgb(240,240,250);
}

</style>
