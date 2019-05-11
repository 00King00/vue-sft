import { Login, Register } from '@/api'
import router from '@/router'

export default {
  namespaced: true,
  state: {
		auth: {
			token: null,
			id: null,
			fullname: null,
			avatar_url: null
		},
		userMenuOpened: false

	},

	mutations: {
		login (state, data) {
			state.auth = data
		},
		toggleUserMenuOpened(state){
			if (state.auth.id !== null) state.userMenuOpened = !state.userMenuOpened
		},
		logout(state){
			state.auth = {
				token: null,
				id: null,
				fullname: null,
				avatar_url: null
			}
			state.userMenuOpened = false
		}
	},

	actions: {
		login (store, data) {
			return Login(data)
				.then(result => {
					store.commit('login', result.data)
					localStorage.setItem('auth', JSON.stringify(result.data))
					return "success login"
				})
				.catch(() => {
					if (localStorage.getItem('auth')) {
						localStorage.removeItem('auth')
					}
				})
		},
		register (store, data) {
			return Register(data)
					.then((res) => {
						alert('Register success')
						return res
					})
		},


    logout ({commit}) {
      localStorage.removeItem('auth')
      commit('logout')
      router.push('/')
    }
	}
}
