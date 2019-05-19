import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true
import modules from './modules'

export default new Vuex.Store({
  state: {
    token: false,
    menu: false
  },

  mutations: {
    setToken (state, token) {
      state.token = token
    },
    openMenu(state, status) {
      state.menu = status
    }
  },

  actions: {
    login (ctx, token) {
      localStorage.setItem('token', token)
      ctx.commit('setToken', token)
    },

    logout (ctx) {
      localStorage.removeItem('token')
      ctx.commit('setToken', false)
    }
  },

  modules
});
