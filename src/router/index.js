import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index.vue";


Vue.use(VueRouter);

const routes = [,
  {
    path:'/',
    redirect:'/bookShelf'
  },
  {
    path:'/',
    component:Home,
    children:[
      {
        path: "bookShelf",
        name: "bookShelf",
        component: () =>
          import(/* webpackChunkName: "bookShelf" */ "../views/bookShelf.vue"),
      },
      {
        path: "bookMall",
        name: "bookMall",
        component: () =>
          import(/* webpackChunkName: "bookMall" */ "../views/bookMall.vue"),
      },
      {
        path: "classify",
        name: "classify",
        component: () =>
          import(/* webpackChunkName: "classify" */ "../views/classify.vue"),
      },
      {
        path: "rankingList",
        name: "rankingList",
        component: () =>
          import(/* webpackChunkName: "rankingList" */ "../views/rankingList.vue"),
      }
    ]
  },
  {
    path:"/readingLog",
    name:"readingLog",
    component:()=>
      import(/* webpackChunkName: "readingLog" */"../views/pages/readingLog.vue")
  },
  {
    path:"/editBookShelf",
    name:"editBookShelf",
    component:()=>
      import(/* webpackChunkName: "editBookShelf" */"../views/pages/editBookShelf.vue")
  },
  {
    path:"/bookList",
    name:"bookList",
    component:()=>
      import(/* webpackChunkName: "bookList" */"../views/pages/bookList.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>
      import(/* webpackChunkName: "login" */"../views/login.vue")
  }
  
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
