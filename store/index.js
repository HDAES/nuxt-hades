import Vue from 'vue'
import Vuex from 'vuex'
import theme from './hades/theme'
import data from './hades/data'
import blog from './admin/blog'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    theme,
    data,
    blog
  },
  actions: {

  }
})
export default store
