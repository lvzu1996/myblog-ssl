import Vue from 'vue'
import Vuex from 'vuex'
import hotel from './modules/hotel'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    hotel,
  },
  plugins: [createLogger()]
})

export default store
