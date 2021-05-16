<template>
  <div class="container">
    <div class="topContainer">
      <div class="top">
        <div class="left">
          <div class="avatar" @click="getSetting"></div>
        </div>
        <div class="right">
          <div class="rightOne">
            <router-link to="">阅读记录</router-link>
          </div>
          <div class="rightTwo">
            <select-feids :text="text"></select-feids>
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
      <div class="cellAdd" >
        <div class="cellAddLeft">
          <div class="addNovel">
            <span >
              <van-icon name="plus" color="#ededed" />
            </span>
          </div>
        </div>
        <div class="cellAddRight">
          <p>添加你喜欢的小说</p>
        </div>
      </div>
      </van-list>
    </div>

    <!--弹出层-->
    <van-popup v-model="show" position="left" :style="{ height: '100%' }" />

    
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
      searchText:"",
      loading: false,
      finished: false,
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
    }
  },
  methods:{
    //列表的数据加载
    onLoad(){
      console.log('aaaa')
      this.loading=false;
      this.finished = true;
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
  width:100%;
  height:120px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #ededed
}
.cellLeft{
  width:25%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cellLeft img{
  width:80%;
  height:80%;
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
  width:25%;
  height:80%;
  padding-top:15px;
}
.cellRight p{
  width:80%;
  margin:0 auto;
  text-align: right;
  color:#737373;
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
  width:100%;
  height:120px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom:1px solid #ededed
}
.cellAddLeft{
  width:25%;
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
</style>
