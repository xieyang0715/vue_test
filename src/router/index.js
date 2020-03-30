import Vue from 'vue';
//路由
import VueRouter from "vue-router";

const buy = () => import("@/components/buy.vue")
const HelloWorld = () => import("@/components/HelloWorld.vue")


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      { path: '/',name:"HelloWorld", component: HelloWorld },
      { path: '/buy',name:"buy", component: buy }
    ]
  })
  

export  default  router