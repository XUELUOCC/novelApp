<template>
    <div>
        <div class="commentContainer">
            <div class="top">
                <van-nav-bar
                fixed
                placeholder
                :title="title"
                left-arrow
                @click-left="onClickLeft"
                />
            </div>
            <div class="gradeContent">
                <div class="gradeContentContainer">
                    <div class="gradeContentTop">
                        <span>10.0</span>
                        <van-rate v-model="grade1" readonly />
                    </div>
                    <div class="gradeContentCenter">
                        7人参与了评分
                    </div>
                    <div class="gradeContentBottom">
                        <span>打个分吧</span>
                        <van-rate
                        v-model="grade2"
                        :size="28"
                        color="#ffd21e"
                        />
                        <van-button  size="small"  type="danger">确定</van-button>
                    </div>
                </div>
                
            </div>
            <div class="commentList">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text=""
                @load="onLoad"
                >
                    <div class="commentListContainer">
                        <div class="commentContent" v-for="item in commentList" :key="item.index">
                            <div class="commentContentLeft">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="commentContentRight">
                                <span class="vistor">{{item.name}}</span>
                                <van-rate v-model="commentGrade" readonly />
                                <div class="vistorContent">
                                    <span >{{item.content}}</span>
                                </div>
                                <div class="vistorGiveLike">
                                    <span class="vistorTime">{{item.time}}</span>
                                    <div class="giveLike">
                                        <img src="../../assets/bookDetail/giveLike.png" alt="">
                                        <span class="giveLikeText">{{item.giveLikeNum}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-list>
            </div>
            <div class="bottomText">
             ——我们是有底线的——
            </div>
            <div class="editComment">
                <van-button @click="editComment" icon="edit" size="normal"  type="danger">写评论</van-button>
            </div>
        </div>
        <!--写评论-->
        <van-overlay :show="show" @click="packUpOverlay">
            <div class="wrapper" >
                <div class="editContainer" @click.stop>
                    <div class="editContent">
                        <div class="editContentTop">评论打分</div>
                        <div class="gradeContainer">
                            <van-rate
                            v-model="editGrade"
                            :size="25"
                            color="#ffd21e"
                            void-icon="star"
                            void-color="#eee"
                            />
                        </div>
                        <div class="editContentForm">
                            <van-field
                            v-model="editCommentContent"
                            border
                            label=""
                            type="textarea"
                            maxlength="250"
                            placeholder="请输入您的评论"
                            show-word-limit
                            />
                        </div>
                        <div class="editBtn">
                            <van-button icon="edit" size="small"  type="danger">提交</van-button>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </van-overlay>

    </div>
</template>

<script>
export default {
    name:'commentDetail',
    data(){
        return{
            title:'书名',
            grade1:5,
            grade2:5,
            commentGrade:5,
            editGrade:5,
            loading: false,
            finished: false,
            show:false,
            editCommentContent:'',
            commentList:[
                {
                    name:'游客1234',
                    content:'内容信息',
                    src:require('../../assets/bookDetail/avator.png'),
                    time:'2020-11-23',
                    giveLikeNum:3
                },
                {
                    name:'游客1234',
                    content:'内容信息',
                    src:require('../../assets/bookDetail/avator.png'),
                    time:'2020-11-23',
                    giveLikeNum:3
                },
            ]
        }
    },
    methods:{
        onClickLeft(){
            console.log('返回')
            this.$router.back(-1)
        },
        onLoad(){
            // if(this.bookList.length==6){
            this.loading=false;
            this.finished=true;
            // }
        },
        editComment(){
            this.show=true;
        },
        packUpOverlay(){
            console.log('aaaaa')
            this.show=false;
        }
    }   
}
</script>

<style scoped>
.commentContainer{
    width:100%;
}
.gradeContent{
    width:100%;
    height:120px;
}
.gradeContentContainer{
    width:95%;
    height:100%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.gradeContentTop{
    width:40%;
    height:30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.gradeContentTop span{
    font-size:18px;
    font-weight:600;
}
.gradeContentTop /deep/ .van-rate__item:not(:last-child){
    padding-right:0;
}
.gradeContentCenter{
    width:100%;
    height:30%;
    display: flex;
    justify-content:center;
    align-items:center;
    color:#aaa;
}
.gradeContentBottom{
    width:90%;
    height:30%;
    margin:0 auto;
    display: flex;
    justify-content:space-between;
    align-items:center;
}
.gradeContentBottom span{
    font-size:16px;
}
.gradeContentBottom /deep/ .van-button--small{
    padding:0 24px;
    border-radius: 50px;
}

/**评论列表 */
.commentList{
    margin:15px auto 0;
    overflow: hidden;
}
.commentListContainer{
    width:100%;
}
.commentContent{
    width:95%;
    height:120px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.commentContentLeft{
    width:15%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.commentContentLeft img{
    width:60%;
}
.commentContentRight{
    width:85%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
}
.vistor{
    font-size:16px;
    font-weight:600;
}
.vistorContent{
    width:100%;
    height:auto;
}
.vistorContent span{
    color:#898989;
}
.vistorGiveLike{
    width:100%;
    height:20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.vistorTime{
    color:#a7a7a7;
}
.giveLike{
    /* width:20%; */
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.giveLike img{
    height:100%;
}
.giveLikeText{
    margin-left:5px;
    font-size:14px;
}

/**底部 */
.bottomText{
  width:100%;
  margin:20px auto;
  text-align: center;
  color:#969799;
}
.editComment{
    position:fixed;
    bottom:20px;
    right:15px;
}
.editComment /deep/ .van-button{
    border-radius: 50px;
}

/**写评论 */
 .wrapper{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
 }
.editContainer{
    width:80%;
    height:40%;
        background-color:#fff;
}
.editContent{
    width:95%;
    height:100%;
    margin:10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.editContentTop{
    width:100%;
    height:10%;
    font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gradeContainer{
    width:100%;
    height:15%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.editContentForm{
    width:100%;
    height:50%;
}
.editContentForm /deep/ .van-field__body{
    height:80%;
}
.editContentForm /deep/ .van-cell{
    height:100%;
}
.editContentForm /deep/ .van-field__control{
    border:1px solid #ddd;
    border-radius: 5px;
    height:100%;
}
.editBtn{
    width:100%;
    height:15%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.editBtn /deep/ .van-button--small{
    padding:0 24px;
    border-radius: 50px;
}
</style>