// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'


import MyNav from './components/Nav'
import MyUpfile from './components/Upfile/Upfile'
import HomeNav from './components/HomeNav'
import Footer from './components/Footer'


import UpPaper from './components/Upfile/UpPaper'
import UpPatent from './components/Upfile/UpPatent'
import UpAchievement from './components/Upfile/UpAchievement'
import UpCase from './components/Upfile/UpCase'
import UpRequirement from './components/Upfile/UpRequirement'
import UpSolution from './components/Upfile/UpSolution'



import SearchBids from './components/SearchBids'
import SearchResources from './components/SearchResources'
import UserAbstract from './components/UserAbstract'
import ResourceAbstract from './components/ResourceAbstract'
import PersonSidebar from './components/PersonSidebar'

import PaperDetail from "./components/ResourceDetail/PaperDetail";
import PatentDetail from "./components/ResourceDetail/PatentDetail";
import AchievementDetail from "./components/ResourceDetail/AchievementDetail";
import SolutionDetail from "./components/ResourceDetail/SolutionDetail";
import CaseDetail from "./components/ResourceDetail/CaseDetail";
import RequirementDetail from "./components/ResourceDetail/RequirementDetail";
import DealRecord from "./components/ResourceDetail/DealRecord";


import ExpertDetail from "./components/UserDetail/ExpertDetail";
import InstitutionDetail from "./components/UserDetail/InstitutionDetail";

import RegisterBasic from './components/Register/RegisterBasic'
import RegisterExpert from './components/Register/RegisterExpert'
import RegisterCity from './components/Register/RegisterCity'
import RegisterInstitution from './components/Register/RegisterInstitution'


import countTo from 'vue-count-to'
import  axios from 'axios'
import  VueAxios from 'vue-axios'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use (VueAxios,axios)
Vue.use(countTo)

import global_ from './components/Global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

window.eventBus = new Vue();
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);

//全局注册组件
Vue.component('MyNav',MyNav)
Vue.component('MyUpfile',MyUpfile)
Vue.component('HomeNav',HomeNav)

Vue.component('UpPaper',UpPaper)
Vue.component('UpPatent',UpPatent)
Vue.component('UpAchievement',UpAchievement)
Vue.component('UpCase',UpCase)
Vue.component('UpSolution',UpSolution)
Vue.component('UpRequirement',UpRequirement)


Vue.component('UserAbstract',UserAbstract)
Vue.component('ResourceAbstract',ResourceAbstract)
Vue.component('PersonSidebar',PersonSidebar)
Vue.component('SearchResources',SearchResources)

Vue.component('Footer',Footer)
Vue.component('SearchBids',SearchBids)
Vue.component('RegisterBasic',RegisterBasic)
Vue.component('RegisterExpert',RegisterExpert)
Vue.component('RegisterInstitution',RegisterInstitution)
Vue.component('RegisterCity',RegisterCity)


Vue.component('PaperDetail',PaperDetail)
Vue.component('PatentDetail',PatentDetail)
Vue.component('AchievementDetail',AchievementDetail)
Vue.component('SolutionDetail',SolutionDetail)
Vue.component('RequirementDetail',RequirementDetail)
Vue.component('CaseDetail',CaseDetail)
Vue.component('DealRecord',DealRecord)


Vue.component('ExpertDetail',ExpertDetail)
Vue.component('InstitutionDetail',InstitutionDetail)

axios.interceptors.request.use(config=>{

  if (Vue.$cookies.get('token')) {
    config.headers["token"] =Vue.$cookies.get('token');
  }
  return config;
},error => {
  return Promise.reject(error)
})
router.beforeEach((to, from, next) => {
  if(Vue.$cookies.get("token")){ //判断本地是否存在token
    next();
  }else {
    if(to.path === '/Login'||to.path === '/Register'||to.path === '/Home'||to.path==='/Commend'){
      next();
    }else {
      next({
        path:'/Login'
      })
    }
  }


  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/Login"){
    if(Vue.$cookies.get("token")){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

