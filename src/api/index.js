import axios from 'axios'
const qs = require('qs')

function Request (token) {
  // TODO дописать зависимость baseURL от process.env.HOST & PORT
  // const baseURL = process.env.NODE_ENV === 'production' ? 'http://sft.sliceplanet.ml/api/public' : 'http://localhost:5000/api/public'
  const baseURL = 'http://37.252.1.151:5000/api/public'
  // console.log('baseURL', baseURL)
  if (token) {
    return axios.create({
      baseURL,
      headers: {
        token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
  return axios.create({ baseURL })
}

let request
let auth = localStorage.getItem('auth')
if (auth) {
  auth = JSON.parse(auth)
  request = Request(auth.token)
} else {
  request = Request()
}

export function Login (data) {
  let form = new FormData()
  form.append('email', data.email)
  form.append('password', data.password)

  return request.post('/access/auth', form)
    .then(response => {
      //request = Request(response.data.result.token)
      return response
    })
    .catch(err =>{
		return err
		//alert(err.response.data.message)
	})
}
export function Register (data) {
  let form = new FormData()
  form.append('email', data.email)
  form.append('fullname', data.fullname)
  form.append('password', data.password)

  return request.post('/access/registration', form)

}

export function GetProfile (id) {
  return request.get(`/profiles/${id}`)

}

export function GetProfileEducation (id) {
  return request.get(`/profile/${id}/education`)
}

export function GetProfileRewards (id) {
  return request.get(`/profile/${id}/rewards`)
}

export function GetProfileKnowledges (id) {
  return request.get(`/profile/${id}/knowledges`)
}

export function SavePrifileKnowledges (userId, id, score) {
  return request.post(`/profile/${userId}/knowledges`, { object_id: id, score })
}

export function EditPassword(data){
  return request.post(`/profiles/current/security/password`, data)
}
export function EditProfile (id, data) {
  let form = new FormData()

  if (data.hasOwnProperty('avatar')) {
    form.append('avatar', data.avatar)
  } else if (data.hasOwnProperty('old_email') && data.hasOwnProperty('new_email')) {
    form.append('old_email', data.old_email)
    form.append('new_email', data.new_email)
  } else if (data.hasOwnProperty('old_password') && data.hasOwnProperty('new_password')) {
    form.append('old_password', data.old_password)
    form.append('new_password', data.new_password)
  }

  return request.post(`/profile/${id}`, form)
}

export function EditProfileEducation (id, data) {
  let form = new FormData()

  let keys = Object.keys(data)

  keys.map(key => {
    let item = data[key]
    form.append(key, item)
  })

  return request.post(`/profile/${id}/education`, form)
}

export function GetProfileFavoriteAspects (id) {
  return request.get(`/profile/${id}/favorite/aspects`)
}

export function AddFavoritesDiscussion (id, object_id) {
  return request.post(`/profile/${id}/favorite/disquss`, { object_id })
}

export function FavoritesDiscussion (id) {
  return request.get(`/profile/${id}/favorite/disquss`)
}

export function DeleteFavoritesDiscussion (id, object_id) {
  return request.delete(`/profile/${id}/favorite/disquss`, { data: { object_id } })
}

export function AddFavoritesAspects (id, object_id) {
  return request.post(`/profile/${id}/favorite/aspects`, { object_id })
}

export function FavoritesAspects (id) {
  return request.get(`/profile/${id}/favorite/aspects`)
}

export function DeleteFavoritesAspects (id, object_id) {
  return request.delete(`/profile/${id}/favorite/aspects`, { data: { object_id } })
}

export function CreateNewDiscussion (data) {
  let form = new FormData()

  form.append('title', data.title)
  form.append('cover', data.cover)

  if (typeof (data.aspect.id) !== 'undefined') {
    form.append('aspect_id', data.aspect.id)
  } else {
    form.append('aspect_title', data.aspect.title)
    form.append('aspect_image', data.aspect.image)
  }

  form.append('argument_description', data.argument)
  form.append('argument_position', data.position)
  form.append('argument_links', JSON.stringify(data.links))

  Object.keys(data.files).map(i => {
    form.append('argument_file' + (+i + 1), data.files[i])
  })

  return request.put(`/discussions`, form)
}

export function GetDiscussions () {
  return request.get('/discussions')
}

export function GetDiscussion (id) {
  return request.get('/discussions/' + id)
}

export function GetDiscussionAspects (id) {
  return request.get(`/discussions/${id}/aspects`)
}

export function GetDiscussionArguments (id) {
  return request.get(`/discussions/${id}/arguments`)
}

export function AddDiscussionArguments (id, data) {
  return request.post(`/discussions/${id}/arguments`, data)
}

export function UsersTop () {
  return request.get(`/users/top`)
}

export function GetFavoriteUsers (id) {
  return request.get(`/profile/favorite/users`, { user_id: id })
}

export function AddFavoriteUsers (id, object_id) {
  return request.post(`/profile/favorite/users`, { user_id: id, object_id })
}

export function DeleteFavoriteUsers (id, object_id) {
  return request.delete(`/profile/favorite/users`, { data: { user_id: id, object_id } })
}

export function DeleteUser (id) {
  return request.delete(`/profile`, { data: { user_id: id } })
}

export function FilterFfavoriteDisquss (id, data) {
  return request.get(`/profile/${id}/favorite/disquss`, {
    params: data,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
  })
}
