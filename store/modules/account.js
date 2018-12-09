import Vue from 'vue'

export default {
  //   state: () => ({
  //     counter: 0
  //   }),
  //   mutations: {
  //     increment(state) {
  //       state.counter++
  //     }
  //   }
  // }
  state: {},
  actions: {
    addAccount: ({ commit }, data) => {
      commit('setAccount', data)
    }
  },
  getters: {
    getAccounts: state => {
      return state
    }
  },
  mutations: {
    setAccount: (state, { key, value }) => {
      Vue.set(state, key, value)
    }
  }
}
