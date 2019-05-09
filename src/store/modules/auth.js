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
		},
		logout(state){
			state.auth = {
				token: false,
				id: false,
				fullname: false,
				avatar: false
			}
		}
	},

	actions: {
		login (store, data) {
			return Login(data)
				.then(result => {
					result.data.avatar = 'https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-1/p160x160/11224676_101791676862053_7182931719457094925_n.jpg?_nc_cat=102&_nc_ht=scontent.fiev4-1.fna&oh=a53c253398600a7d5e547d9748e2efcd&oe=5D68D749'
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
      //window.location = '/'
      router.push('/')
    }
	}
}
