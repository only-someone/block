import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/Login'
import Home from '../view/Home'
import UploadResource from '../view/UploadResource'
import Commend from '../view/Commend'
import SearchResult from '../view/SearchResult'
import PersonDetail from "../view/PersonDetail"
import ResourceDetail from '../view/ResourceDetail'
import Register from "../view/Register"
import UserDetail from "../view/UserDetail";
import Contact from "../view/Contact";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/UploadResource',
      name: 'UploadResource',
      component: UploadResource
    },
    {
      path: '/Commend',
      name: 'Commend',
      component: Commend
    },
    {
      path: '/SearchResult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/PersonDetail',
      name: 'PersonDetail',
      component: PersonDetail
    },
    {
      path: '/ResourceDetail',
      name: 'ResourceDetail',
      component: ResourceDetail
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/UserDetail',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path:'/Contact',
      name:'Contact',
      component: Contact
    }
  ]
})





