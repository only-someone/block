// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Nav from './components/Nav'
import Upfile from './components/Upfile'
import HomeNav from './components/HomeNav'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);

//全局注册组件
Vue.component('MyNav',Nav)
Vue.component('MyUpfile',Upfile)
Vue.component('HomeNav',HomeNav)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
