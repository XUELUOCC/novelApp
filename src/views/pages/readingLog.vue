<template>
  <div>
    <div class="top">
        <van-nav-bar
        v-if="!flag"
        fixed
        placeholder
        title="阅读历史"
        right-text="清空"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-nav-bar
        v-if="flag"
        fixed
        placeholder
        title="阅读历史"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>
    <div class="list" v-if="!flag">
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
          <!-- <router-link :to="item.detailUrl">书籍详情></router-link> -->
          <van-button size="mini" plain hairline type="danger" :to="item.detailUrl">书籍详情</van-button>
          <p>{{item.time}}</p>
        </div>
      </div>
      </van-list>
    </div>

    <!--阅读历史为空的展示-->
    <div class="listNull" v-if="flag">
        <div class="listNullContent">
            <!-- <div class="paper">
                <img src="../../assets/readingLog/paper.png" alt="">
            </div>
            <div class="text">您还没有阅读记录</div>
            <div class="bottom">
                <van-button size="large" round plain type="danger" to="/bookMall">去看书></van-button>
            </div> -->
            <van-empty description="您还没有阅读记录" :image="imgSrc">
              <div class="bottom">
                <van-button size="large" round plain type="danger" to="/bookMall">去看书></van-button>
            </div>
            </van-empty>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading: false,
            finished: false,
            flag:false,//判断list为空时是否显示相应的页面和样式
            imgSrc:require("../../assets/readingLog/paper.png"),
            list: [
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },
                {
                imgUrl:require('../../assets/bookShelf/novelPage.jpg'),
                name:'逆天邪神',
                detailUrl:'',
                noticeText:'最新：章节更新通知',
                tipsUpdate:'第二章',
                time:'1周前'
                },

            ],
        }
    },
    mounted(){ 
        console.log('readingLog')
    },
    methods:{
        onClickLeft(){
            console.log('返回')
            this.$router.back(-1)
        },
        onClickRight(){
            this.$dialog.confirm({
                title: '删除提示',
                message: '确认删除全部历史',
            })
            .then(() => {
                // on confirm
                this.list=[];
                this.flag=true;
            })
            .catch(() => {
                // on cancel
            });
        },
        //列表的数据加载
        onLoad(){
            console.log('aaaa')
            this.loading=false;
            this.finished = true;
        },
        getNovelContent(index){

        }
    }
}
</script>

<style scoped>

div /deep/.van-nav-bar__text{
    color:#adadad!important;
}
div /deep/.van-nav-bar .van-icon{
    color:#333;
}
/* .top{
    border:1px solid red;
} */

/**阅读列表 */
.list{
    width:100%;
}
.listContent{
    width:90%;
    margin:0 auto;
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
  padding-right:5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
.cellRight p{
  width:80%;
  margin:0 auto;
  text-align: right;
  color:#737373;
}
/* .cellRight a{
    display: inline-block;
    padding:2px;
    margin-right:8px;
    border:1px solid red;
    color:red;
    border-radius: 5px;
} */

/**历史记录为空 */
.listNull{
    width:80%;
    height:40%;
    margin:10% auto;
}
.listNullContent{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.bottom{
    width:160px;
}
div /deep/ .van-empty__bottom{
  margin-top:0.4rem;
}

</style>