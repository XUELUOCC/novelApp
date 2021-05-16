<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
         <van-tabbar-item v-for="item in tabbarList" :key="item.index" :to="item.url" >
            <template #icon="props">
                <img :src="props.active ? item.active : item.inactive" />
            </template>
            <span>{{item.name}}</span>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0,
            flag:true,
            tabbarList:[
                {
                    index:0,
                    name:'书架',
                    active:require('../../assets/tabbarImg/shujiaActive.png'),
                    inactive:require('../../assets/tabbarImg/shujia.png'),
                    url:'/bookShelf'
                },{
                    index:1,
                    name:'书城',
                    active:require('../../assets/tabbarImg/shuchengActive.png'),
                    inactive:require('../../assets/tabbarImg/shucheng.png'),
                    url:'/bookMall'
                },{
                    index:2,
                    name:'分类',
                    active:require('../../assets/tabbarImg/fenleiActive.png'),
                    inactive:require('../../assets/tabbarImg/fenlei.png'),
                    url:'/classify'
                },{
                    index:3,
                    name:'排行',
                    active:require('../../assets/tabbarImg/paihangActive.png'),
                    inactive:require('../../assets/tabbarImg/paihang.png'),
                    url:'/rankingList'
                }
            ]
        }
    },
    mounted(){ 
        console.log(this.$route)
        let path=this.$route.fullPath;
        let newData=this.tabbarList.filter((item,index)=>{
            if(item.url==path){
                return true
            }else{
                return false
            }
        })
        this.active=newData[0].index
        console.log(newData)
    },
    methods:{
        onChange(index){
            console.log(index+'aaaaa')
            // const routerList=[
            //     '/bookShelf',
            //     '/bookMall',
            //     '/classify',
            //     '/rankingList'
            // ]
            // this.$router.push(routerList[index])
        }
    }
}
</script>

<style scoped>
.active{
    color:red;
}
.van-tabbar-item--active{
    color:red;
}
</style>