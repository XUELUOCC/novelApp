import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //保存bookMall中的tab切换的索引，实现跳转后返回仍然是跳转、前的索引
    active:0,
    //保存bookShelf的侧边栏弹出的boolan值,跳转后返回，仍然是侧边栏弹出
    show:false
  },
  mutations: {
    saveActive(state,value){
      state.active=value;
    },
    saveShow(state,val){
      state.show=val
    }
  },
  actions: {},
  modules: {},
});
