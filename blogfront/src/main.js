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



new Vue({
  el: '#app',
  router,//引用vue-router
  store,//引用vuex
  template: '<App/>',
  components: { App }
})
