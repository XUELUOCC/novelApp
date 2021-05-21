<template>
    <div>
        <div class="settingContainwer">
            <div class="top">
                <van-nav-bar
                fixed
                placeholder
                title="设置"
                left-arrow
                @click-left="onClickLeft"
                />
            </div>
            <div class="settingList">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text=""
                @load="onLoad"
                >
                    <van-cell 
                    v-for="item in settingList" 
                    :key="item.index" 
                    :title="item.title"  
                    :value="item.value" 
                    :is-link="item.url? true:false" 
                    :to="item.url"
                    />       
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'setting',
    data(){
        return{
            loading: false,
            finished: false,
            settingList:[
                {
                    title:'用户协议',
                    value:'',
                    url:''
                },
                {
                    title:'版本号',
                    value:'v1.0.0',
                    url:''
                },
                {
                    title:'关于我们',
                    value:'',
                    url:''
                },
                {
                    title:'注销',
                    value:'',
                    url:'/login'
                }
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
    }
}
</script>