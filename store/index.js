import Vuex from 'vuex'
import account from './modules/account'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      account
    }
  })
}

export default createStore
