/*
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-21 17:05:05
 * @Description:
 */

const state = () => ({
  sort: [],
  articlelist: [],
  say: [],
  audio: [{
    name: '东西（Cover：林俊呈）',
    artist: '纳豆',
    url: 'http://qiniu.xl686.com/cloud.mp3',
    cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'
    // lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
  } ]
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
  },
  addAudio(state, payload) {
    state.audio.push(payload)
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
