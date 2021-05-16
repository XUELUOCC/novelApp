import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入vant ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入lib-flexible
import 'lib-flexible' //直接引用

//导入iconfont图标
// import '@/assets/iconfont/iconfont.css' //unicode格式

// import '@/assets/iconfont/iconfont.js'  //symbol格式
// import '@/assets/iconfont/icon.css'  //symbol格式书写的css

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
