// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'


import MyNav from './components/Nav'
import MyUpfile from './components/Upfile'
import HomeNav from './components/HomeNav'
import Footer from './components/Footer'


import UpPaper from './components/UpPaper'
import UpPatent from './components/UpPatent'
import UpAchievement from './components/UpAchievement'
import UpCase from './components/UpCase'
import UpRequirement from './components/UpRequirement'
import UpSolution from './components/UpSolution'


import Commend_User from './components/Commend_User'
import Commend_Resource from './components/Commend_Resource'
import Commend_Bid from './components/Commend_Bid'

import SearchBids from './components/SearchBids'
import SearchResources from './components/SearchResources'
import UserAbstract from './components/UserAbstract'
import ResourceAbstract from './components/ResourceAbstract'
import PersonSidebar from './components/PersonSidebar'

import PaperDetail from "./components/PaperDetail";
import PatentDetail from "./components/PatentDetail";
import AchievementDetail from "./components/AchievementDetail";
import SolutionDetail from "./components/SolutionDetail";
import CaseDetail from "./components/CaseDetail";
import RequirementDetail from "./components/RequirementDetail";


import RegisterBasic from './components/RegisterBasic'
import RegisterExpert from './components/RegisterExpert'
import RegisterCity from './components/RegisterCity'
import RegisterInstitution from './components/RegisterInstitution'


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


Vue.component('CommendUser',Commend_User)
Vue.component('UserAbstract',UserAbstract)
Vue.component('CommendResource',Commend_Resource)
Vue.component('ResourceAbstract',ResourceAbstract)
Vue.component('CommendBid',Commend_Bid)
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

