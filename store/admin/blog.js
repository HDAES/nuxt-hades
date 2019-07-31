import api from '@/static/api'

const state = () => ({
  allBlog: []
})

const mutations = {
  getBlog(state, payload) {
    state.allBlog = payload
  }
}

const actions = {
  async asyncGetBlog({ commit }) {
    const blog = await this.$axios.get(api.getAllBlog)
    commit('getBlog', blog)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
