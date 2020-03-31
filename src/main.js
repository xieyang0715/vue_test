import Vue from 'vue'
import App from './App.vue'
//复制到剪切板
import clipboard from 'clipboard';
//路由
import router from "./router";



//注册到vue原型上
Vue.prototype.clipboard = clipboard;


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
