import { Login, Register, Logout } from '@/api'
import router from '@/router'

export default {
	namespaced: true,
	state: {
		auth: {
			id: null,
			fullname: null,
			avatar_url: null,
			is_confirmed: false,
			total_likes: null,
			i_like: false
		},
		permission: false,
		userMenuOpened: false,
		renderKeyAvatar: 1,

	},

	mutations: {
		setPermission(state){
			state.permission = true
		},
		login (state, data) {
			state.auth = data
		},
		toggleUserMenuOpened(state){
			if (state.auth.id !== null) state.userMenuOpened = !state.userMenuOpened
		},
		logout(state){
			state.auth = {
				id: null,
				fullname: null,
				avatar_url: null,
				is_confirmed: false,
				total_likes: null,
				i_like: false
			}
			state.userMenuOpened = false
			state.permission = false
		},
		updateAvatar(state){
			state.renderKeyAvatar += 1;
		}
	},

	actions: {
		login (store, data) {
			return Login(data)
				.then(result => {
					store.commit('login', result.data)
					return "success login"
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
			Logout().then(()=>{
				commit('logout')
				router.push('/')
			})
		}
	}
}
