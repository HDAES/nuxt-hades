/*
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-20 22:46:49
 * @Description:
 */

const state = () => ({
  sort: [],
  articlelist: [],
  say: []
})

const mutations = {
  getSort(state, payload) {
    state.sort = payload
  },
  getArticleList(state, payload) {
    state.articlelist = payload
  },
  getSay(state, payload) {
    state.say = payload
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
  },
  async asyncGetSay({ commit }) {
    const say = await this.$axios.get('/api/hades/saying')
    commit('getSay', say)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
