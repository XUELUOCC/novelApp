<template>
    <div>
        <van-nav-bar
        fixed
        placeholder
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="bookList">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
                <div class="bookInfo" v-for="(item,index) in bookList" :key="item.index" @click="getCityBook(index)">
                  <div class="infoLeft">
                    <img src="../../assets/bookShelf/novelPage.jpg" alt="">
                  </div>
                  <div class="infoRight">
                    <div class="name">
                        <div class="nameLeft">{{item.name}}</div>
                        <div class="nameRight">评分：{{item.grade}}</div>
                    </div>
                    <div class="introduct">{{item.introduct}}</div>
                    <div class="author">
                      <span class="spans">{{item.author}}</span>
                      <div class="authorRight">
                        <van-button color="#d2a564" plain hairline  size="mini">完结</van-button>
                        <van-button color="#b5b3c9" plain hairline  size="mini">奇幻玄幻</van-button>
                      </div>
                    </div>
                  </div>
                </div>
            </van-list>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loading: false,
            finished: false,
            title:'',
            bookList:[
                {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },    
            {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },
            {
                name:'圣墟',
                grade:'10',
                author:'辰东',
                introduct:'圣墟的简介',
                src:require('../../assets/bookShelf/novelPage.jpg')
            },   
            ]
        } 
    },
    mounted(){
        // console.log('aaaa')
        // console.log(this.$route)
        this.title=this.$route.params.title
    },
    methods:{
        onClickLeft(){
            console.log('返回')
            this.$router.back(-1)
        },
        onLoad(){
            if(this.bookList.length==6){
            this.loading=false;
            this.finished=true;
            }
        },
    }
}
</script>
<style scoped>
.bookList{
    width:100%;
}
.bookInfo{
  width:95%;
  height:120px;
  margin:0 auto 35px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.infoLeft{
  width:35%;
  display:flex;
  /* justify-content: center; */
  padding-left:10px;
  align-items: center;
}
.infoLeft img{
  width:80%;
}
.infoRight{
  width:68%;
  height:85%;
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
  justify-content: space-between;
  align-items: center;
  font-weight:600;
  text-align: left;
  margin-bottom:5px;
}
.nameLeft{
    width:40%;
    height:100%;
    display:flex;
    /* justify-content: center; */
    align-items: center;
}
.nameRight{
    width:40%;
    height:100%;
    color:#d2a564;
    display:flex;
    justify-content: center;
    align-items: center;
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
</style>