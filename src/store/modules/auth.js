import { Login, Register } from '@/api'

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
					store.commit('login', result.data.result)
					localStorage.setItem('auth', JSON.stringify(result.data.result))
					return true
				})
				.catch(err => {
					console.log(err);
					if (localStorage.getItem('auth')) {
						localStorage.removeItem('auth')
					}
				})
		},

		register (store, data) {
      return Register(data)
				.then(result => {
					alert('Register success')
					return result
				})
		},

    logout () {
      localStorage.removeItem('auth')
      window.location = '/'
    }
	}
}
