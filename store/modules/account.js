import Vue from 'vue'
import _get from 'lodash/get'

export default {
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
    setAccount: (state, data) => {
      Vue.set(state, 'list', [..._get(state, 'list', []), data])
    }
  }
}
