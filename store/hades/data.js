
const state = () => ({
  sort: [],
  articlelist: []
})

const mutations = {
  getSort(state, payload) {
    state.sort = payload
  },
  getArticleList(state, payload) {
    state.articlelist = payload
  }
}

const actions = {
  async asyncGetSort({ commit }) {
    const sort = await this.$axios.get('/api/hades/sort')
    commit('getSort', sort)
  },
  async asyncGetArticleList({ commit }) {
    const articlelist = await this.$axios.get('/api/hades/articlelist')
    commit('getArticleList', articlelist)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
