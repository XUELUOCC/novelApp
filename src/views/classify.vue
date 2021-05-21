<template>
  <div>
    <div class="classifyContent">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text=""
        @load="onLoad"
        >
            <van-grid :border="false" :column-num="1">
              <van-grid-item v-for="(item,index) in classifyList" :key="item.key" @click="getClassify(index)">
                  <div class="content">
                    <div class="contentLeft">
                      <span class="contentLeftTitle">{{item.classifyName}}</span>
                      <span>已有{{item.bookNum}}本书籍</span>
                    </div>
                    <div class="contentRight">
                      <div class="img1">
                        <img :src="item.src1" alt="">
                      </div>
                      <div class="img2">
                        <img :src="item.src2" alt="">
                      </div>
                      <div class="img3">
                        <img :src="item.src3" alt="">
                      </div>
                    </div>
                </div>
              </van-grid-item>
          </van-grid>
             
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name:'classify',
  data(){
    return{
        loading: false,
        finished: false,
        classifyList:[
          {
            classifyName:'热血都市',
            bookNum:'256435',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'东方玄幻',
            bookNum:'1545325',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'现代言情',
            bookNum:'45346',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'古代言情',
            bookNum:'45363',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'悬疑灵异',
            bookNum:'52644',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'历史军事',
            bookNum:'56131',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'仙侠武侠',
            bookNum:'789452',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'幻想言情',
            bookNum:'12342',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
          {
            classifyName:'科幻虚拟',
            bookNum:'36456',
            src1:require('../assets/bookShelf/novelPage.jpg'),
            src2:require('../assets/bookShelf/novelPage2.jpeg'),
            src3:require('../assets/bookShelf/novelPage.jpg'),
          },
        ]
    }
  },
  methods:{
    onLoad(){
        if(this.classifyList.length==9){
        this.loading=false;
        this.finished=true;
        }
    },
    getClassify(index){
      this.$router.push({name:'bookList',params:{title:this.classifyList[index].classifyName}})
    }
  }
}
</script>

<style scoped>
.classifyContent{
  width:100%;
}
.content{
  width:90%;
  height:100%;
  margin:10px auto 0;
  padding:10px;
  box-shadow:0px 1px  1px 1px #ebebeb;
  border-radius: 3px;
  border:1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contentLeft{
  width:50%;
  height:60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.contentRight{
  width:50%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.img1{
  width:40%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.img2{
  width:35%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.img3{
  width:30%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.img1 img,.img2 img,.img3 img{
  width:100%;
}
.contentLeftTitle{
  font-size:18px;
}
</style>