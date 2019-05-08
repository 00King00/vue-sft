import { Login, Register } from '@/api'
import router from '@/router'

export default {
  namespaced: true,
  state: {
		auth: {
			token: false,
			id: false,
			fullname: false,
			avatar: false
		}

	},

	mutations: {
		login (state, data) {
			state.auth = data
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


    logout () {
      localStorage.removeItem('auth')
      //window.location = '/'
      router.push('/')
    }
	}
}
