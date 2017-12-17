/*
 @Author:lvzu
 @Update:2017/9/19

本文件是vue-router的配置文件

在导入各页面时使用的是Vue的懒加载
如下：
const Home = () => import('@/pages/Home/Home')

懒加载官方文档：
https://router.vuejs.org/en/advanced/lazy-loading.html#

 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home/Home')
const Main = () => import('@/pages/Main/Main')
const Hello = () => import('@/pages/Hello/Hello')
const Register = () => import('@/pages/Register/Register')
const Lvzu = () => import('@/pages/Lvzu/Lvzu')
const Test = () => import('@/pages/Test/Test')
const DetailInfo = () => import('@/pages/DetailInfo/DetailInfo')
const Livecenter = () => import('@/pages/Livecenter/Livecenter')
const errorPage = () => import('@/pages/404.vue')

Vue.use(Router)

var _routes = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path:'/',
    name:'WE电子竞技俱乐部',
    component : Home
  },
  {
    path:'/register',
    name:'账号注册',
    component:Register
  },
  {
    path:'/main',
    name:'Main',
    component:Main
  },
  {
    path:'/test',
    name:'测试页面',
    component:Test
  },
  {
    path:'/livecenter',
    name:'直播中心',
    component:Livecenter
  },
  {
    path:'/about-me',
    name:'关于lvzu',
    component:Lvzu
  },
  {
    path:'/register/detailInfo',
    name:'详细信息填写',
    component:DetailInfo
  },
  {
    path: '*',
    redirect: '/404',
    hidden:true
  },
  {
    path: '/404',
    name:'页面出错了~',
    component:errorPage
  },
]

var router = new Router({
    routes: _routes
})

//绑定页面title
router.afterEach((to, from, next) => {
  document.title = to.name;
})

export default router
