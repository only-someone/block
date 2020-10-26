import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/Login'
import Home from '../view/Home'
import UploadResource from '../view/UploadResource'
import Commend from '../view/Commend'
import SearchResult from '../view/SearchResult'
import PersonDetail from "../view/PersonDetail"

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
    }

  ]
})





