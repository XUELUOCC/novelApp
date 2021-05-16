<template>
  <div class="selcetContain">
    <p id="spans" @click="showList">{{text}}</p>
    <div class="ulList" v-if="show">
        <div class="deltaContont">
            <div class="delta"></div>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="item.index" @click="confirm(index)">{{item}}</li>
        </ul>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            show:false,
            list:[
                '封面模式',
                '编辑书架'
            ]
        }
    },
    props:{
        text:{
            type:String
        }
    },
    methods:{
        showList(){
            this.show=!this.show;
        },
        confirm(index){

        }
    }
}
</script>

<style>
.selcetContain{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
}
input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #333;
    /* placeholder字体大小  */
    font-size: 0.12rem;
    /* placeholder位置  */
    text-align: right;
}
.ulList{
    position:absolute;
    bottom:-62px;
    z-index:999;
    /* left:-0.1rem; */
    border-radius: 3px;
    box-shadow:0px 0px  3px 2px #e4e4e4;
    background-color:#fff;
}
.ulList ul{
    width:80px;
    height:auto;
    /* padding:0.1rem; */
    list-style: none;
}
.ulList ul li{
    width:100%;
    text-align: center;
    margin:0.1rem 0;
    padding:0.1rem 0;
    font-size:0.12rem;
}
.ulList ul li:nth-child(1){
    border-bottom:1px solid #f0f0f0;
}
.ulList ul li:nth-child(2){
    /* border-bottom:1px solid #f0f0f0; */
    padding-top:0;
}
#spans{
    font-size:0.12rem;
    width:100%;
    height:100%;
    color:#333;
    text-align: center;
    line-height:30px;
}
/**三角形div */
.deltaContont{
    /* width:100%; */
    height:4px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position:absolute;
    top:1px;
    right:5px;
}
.delta{
    width: 0;
    height: 0;
    margin-top:-10px;
    margin-right:5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    border-radius: 2px;
    /* box-shadow:0px 0px  0.01rem 0.01rem #aaa; */
}
</style>