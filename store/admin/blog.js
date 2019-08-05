import api from '@/static/api'
const state = () => ({
  allBlog: [],
  blogSort: []
})

const mutations = {
  saveBlog(state, payload) {
    state.allBlog = payload
  },
  saveBlogSort(state, payload) {
    state.blogSort = payload
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
