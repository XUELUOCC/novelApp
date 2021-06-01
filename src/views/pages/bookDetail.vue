<template>
    <div class="bookDetail">
        <div class="top">
            <van-nav-bar
            fixed
            placeholder
            :title="title"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
        <div class="">
            <div class="bookList">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text=""
                @load="onLoad"
                >
                    <div class="detail">
                        <div class="detailTop">
                             <div class="detailLeft">
                                 <div class="imgs"></div>
                             </div>
                            <div class="detailRight">
                                <div class="name">书名</div>
                                <div class="authorDetail">
                                    <div class="authorDetailLeft">作者</div>
                                    <div class="grade">10.0</div>
                                    <div class="rate">
                                        <van-rate readonly  v-model="grade" />
                                    </div>
                                </div>
                                <div class="bookStatus">
                                    <span>已完结</span>
                                    <span>|</span>
                                    <span>现代言情</span>
                                    <span>|</span>
                                    <span>255万字</span>
                                </div>
                                <div class="detailBtns">
                                    <div class="detailBtnL">
                                        <van-button size="normal"  plain type="primary">加入书架</van-button>
                                    </div>
                                    <div class="detailBtnR">
                                        <van-button @click="getBookContent" size="normal"  type="primary">立即阅读</van-button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="detailIntroduct">
                            <span :class="[arrowFlag?'introductText':'introductText tips']">
                                冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。
                            这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。
                            九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？
                            一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，
                            激情若瀚海汹涌，欲望如深渊无止境……登天路，踏歌行，弹指遮天。
                            </span>
                            <span class="arrowSpan" @click="dowmUp">
                                <van-icon v-if="!arrowFlag" name="arrow-down" color="#333" />
                                <van-icon v-if="arrowFlag" name="arrow-up" color="#333"/>
                            </span>        
                        </div>
                        <div class="gap"></div>
                        <div class="catalogue">
                            <div class="catalogueContent">
                                 <div class="catalogueLeft">
                                    <span class="catalogueIcon">NEW</span>
                                    <span>更新至</span>
                                    <span>第一章 出生</span>
                                </div>
                                <div class="catalogueRight">
                                    <img src="../../assets/bookDetail/catalogue.png" alt="">
                                    <span>目录</span>
                                </div>
                            </div>
                        </div>
                        <div class="gap"></div>
                        <div class="comment">
                            <div class="commentTop">
                                <div class="commentTopLeft">
                                    <span>书友评论</span>
                                </div>
                                <div class="commentTopRight">
                                    <span class="editIcon">
                                        <van-icon color="#fff" name="edit" />
                                    </span>
                                    <span class="editText">写评论</span>
                                </div>
                            </div>
                            <div>
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
                            <div class="commentBottom">
                                <span @click="getCommentDetail">查看全部评论</span>
                            </div>
                            
                        </div>
                    </div>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'bookDetail',
    data(){
        return{
            title:'书名',
            grade:5,
            commentGrade:5,
            loading: false,
            finished: false,
            arrowFlag:false,
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
        dowmUp(){
            this.arrowFlag=!this.arrowFlag;
        },
        getCommentDetail(){
            this.$router.push({name:'commentDetail',params:{title:this.title}})
        },
        getBookContent(){
            this.$router.push({name:'bookContent',params:{bookName:this.title}})
        }
    }
}
</script>

<style scoped>
.bookDetail{
    width:100%;
}
.top{
    width:100%;
}
.bookList{
    width:100%;
}
.detail{
    width:100%;
    margin:0 auto;
    overflow: hidden;
}
.detailTop{
    width:95%;
    height:150px;
    margin:10px auto 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.detailLeft{
    width:35%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgs{
    width:80%;
    height:100%;
    background-image:url(../../assets/bookShelf/novelPage.jpg);
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow:0px 0px  3px 2px #e4e4e4;
}
.detailRight{
    width:60%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.authorDetail{
    height:20%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
}
.name{
    font-size:18px;
}
.authorDetailLeft,.grade,.rate{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px;
    font-size:14px;
}
.grade{
    font-weight: 600;
}
.bookStatus{
    display:flex;
    justify-content: flex-start;
    align-items: center;
}
.bookStatus span{
    margin-right:5px;
}
.detailBtns{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div /deep/ .van-button{
    height:37.5px;
}
div /deep/ .van-button--normal{
    padding:0 20px;
}
.detailBtnL .van-button{
    border-radius: 0 10px 0 10px;
    color:#e2563b;
}
.detailBtnR .van-button{
    border-radius: 0 10px 0 10px;
}
.detailIntroduct{
    width:95%;
    /* height:100px; */
    margin:10px auto;
    text-align: justify;
    line-height:20px;
    position:relative;
}
/* .introductText{
    
} */
.tips{
    display: -webkit-box;
    word-break: break-all;
    /* text-overflow: ellipsis; */
    font-size: 28rpx;/*自适应字体*/
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;/*设置 需要显示的行数*/
}
.arrowSpan{
    display: flex;
    justify-content: center;
    align-items: center;
    width:15px;
    height:15px;
    background-image: linear-gradient(to right,rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 1));
    position:absolute;
    bottom:0px;
    right:-4px;
}

/**目录 */
.catalogue{
    width:100%;
    height:50px;
}
.catalogueContent{
    width:95%;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.catalogueLeft{
    width:70%;
    height:100%;
    display:flex;
    justify-content: flex-start;
    align-items:center;
}
.catalogueLeft span{
    margin-left:10px;
}
.catalogueIcon{
    display: inline-block;
    padding:5px 10px;
    background-color:#fb6c97;
    color:#fff;
    border-radius: 5px 0 5px 0px;
}
.catalogueRight{
    width:20%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items: center;
}
.catalogueRight img{
    height:40%;
}
.catalogueRight span{
    margin-left:10px;
}
.gap{
    width:100%;
    height:10px;
    background-color:#f6f7fb;
}

/**评论 */
.comment{
    width:100%;
}
.commentTop{
    width:95%;
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.commentTopLeft{
    width:20%;
    height:100%;
    text-align: center;
    line-height:50px;
}
.commentTopRight{
    width:20%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items: center;
}
.editIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    width:20px;
    height:20px;
    background-color:#ff0604;
    border-radius: 50%;
     margin-right:10px;
}
.editText{
    color:#e85241;
}
.commentContent{
    width:95%;
    height:120px;
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
.commentBottom{
    width:100%;
    height:40px;
    margin:20px auto;
    display:flex;
    justify-content: center;
    align-items: center;
}
.commentBottom span{
    color:#ec4f3e;
    font-size:16px;
}
</style>