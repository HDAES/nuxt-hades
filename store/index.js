import Vue from 'vue'
import Vuex from 'vuex'
import theme from './hades/theme'
import data from './hades/data'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    theme,
    data
  },
  actions: {

  }
})
export default store
