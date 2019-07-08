
const state = () => ({
  theme: 'light'
})

const mutations = {
  changeTheme(state) {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  }
}

const actions = {
  changeTheme({ commit }) {
    commit('changeTheme')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
