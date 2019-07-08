import Vue from 'vue'
import Vuex from 'vuex'
import theme from './hades/theme'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    theme
  },
  actions: {

  }
})
export default store
