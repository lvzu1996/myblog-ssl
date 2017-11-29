import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'

// import VueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
// import lvment from 'lvment'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueResource)
// Vue.use(lvment.Search)

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err)
  console.log(vm)
  console.log(info)
}

new Vue({
  el: '#app',
  router,//引用vue-router
  store,//引用vuex
  template: '<App/>',
  components: { App }
})
