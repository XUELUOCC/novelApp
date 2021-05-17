<template>
  <div>
      <router-view></router-view>
      <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar.vue'
export default {
    components: {
        tabbar,
    },
    inject: ['reload'],  // 注入重载的功能（注入依赖）
    data(){
        return{

        }
    },
    watch: {
    //检测路由参数发生改变时，刷新当前页面 调用
    '$route': function(){
        console.log('监听')
        this.reload();
    }
  },
    mounted(){
        console.log('aindex')
    },
    methods:{

    }
}
</script>

<style>

</style>