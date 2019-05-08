import { Login, Register } from '@/api'
import axios from 'axios'
let BaseUrl = 'http://37.252.1.151:5000/api/public';
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
		// register (store, data) {
	    //   return Register(data)
		// 			.then(result => {
		// 				alert('Register success')
		// 				return true
		// 			})
		// },
		REGISTER (store, data) {
			console.log(data)
			axios.post(BaseUrl+'/access/registration', data).then(res => {
				console.log(res);
				return res;

			})
		},

    logout () {
      localStorage.removeItem('auth')
      window.location = '/'
    }
	}
}
