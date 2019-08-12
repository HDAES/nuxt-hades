/*
 * @Date: 2019-08-05 22:42:36
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-12 21:48:35
 * @Description:api 接口
 */
import api from '@/static/api'
const state = () => ({
  allBlog: [],
  blogSort: [],
  blogDetails: []
})

const mutations = {
  saveBlog(state, payload) {
    state.allBlog = payload
  },
  saveBlogSort(state, payload) {
    state.blogSort = payload
  },
  saveBlogDetails(state, payload) {
    state.blogDetails = payload
  }
}

const actions = {
  async asyncGetBlog({ commit }) {
    const blog = await this.$axios.get(api.getAllBlog)
    commit('saveBlog', blog)
  },
  async getBlogSort({ commit }) {
    const sort = await this.$axios.get(api.getSort)
    commit('saveBlogSort', sort)
  },
  async getBlogDetails({ commit }) {
    const details = await this.$axios.get(api.getBlogDetails)
    commit('saveBlogDetails', details)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
