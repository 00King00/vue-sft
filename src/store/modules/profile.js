import {
  GetProfileId,//*
  GetProfileEducation,//*
  EditProfileEducation,//*
  EditProfileEducationScan,//*
  GetUsersTop,//*
  ToggleDiscusionAuthorFav,//*
  EditPassword,//*
  EditEmail,//*
  ChangeAvatar,//*
  GetAllAspects,//*
  ToggleAspects, //*
  GetDiscussionsFav, //*
  ToggleDiscusionFav, //*
  GetFavoritesAuthors, //*

} from '@/api'

export default {
  namespaced: true,

  state: {
    profile: null,
    profile_rewards: [],
    profile_knowledge: [],
    profile_education: {
      country: "",
      city: "",
      high_school: "",
      faculty: "",
      speciality: "",
      graduation_date: "",
      scan_url: "",
      is_verified: false
    },
    all_aspects: [],
    favorite_aspects: [],
    favoritesDiscussion: [],
    favoritesDiscussions: [],
    favoritesAspect: [],
    usersTop: [],
    favoritesAuthors: [],
  },

  mutations: {
    setFavoritesDiscussionAuthors(state, items){
      state.favoritesAuthors = items
    },//*
    setAllAspects(state, payload){state.all_aspects = payload},//*
    UpdateAspects(state, {i, payload}){state.all_aspects[i].is_favorite = payload.is_favorite},//*
    setUserProfile (state, profile) {
      state.profile = profile
    },//*
    setUserEducation (state, education) {
      state.profile_education = education
    },//*
    setUserTop(state, payload){
      state.usersTop = payload
    },
    setFavoritesDiscussion(state, disc){
      state.favoritesDiscussions = disc
    }, //*
    addCustomAspect (state, aspect) {
      state.favorite_aspects.push(aspect)
    },//*
    replaceDiscusionAuthorFav(state, {id, is_favorite}){
      state.usersTop.find((disc, index) =>{
        if(disc.id == id){
          state.usersTop[index].is_favorite = is_favorite
        }
      })
    },//*
    deleteFavoritesDiscussion(state, id){
      state.favoritesDiscussions.find((disc, index)=>{
        if(disc.id == id){ state.favoritesDiscussions.splice(index, 1)}
      })
    }, //*
    cleareFavoritesDiscussions(state){
      state.favoritesDiscussions = []
    }, //*
    cleareFavoritesDiscussionAuthors(state){
      state.favoritesAuthors = []
    }, //*
    removeFavoritesDiscussionAuthors(state, id){
      state.favoritesAuthors.find((author, i)=>{
        if (author.id == id){state.favoritesAuthors.splice(i,1)}
      })
    }

  },

  actions: {
    toggleDiscusionAuthorFav(ctx, id){
      return ToggleDiscusionAuthorFav(id).then(res =>{
        return res.data
      })
    },//*
    GetAllAspects ({commit}){
      return GetAllAspects().then( res => {
        commit('setAllAspects', res.data.items)
        return res
      })
    },//*
    toggleAspects(context, id){
      return ToggleAspects(id)
    },//*
    getUserProfile (store, id) {
      return GetProfileId(id)
        .then(response => {
          store.commit('setUserProfile', response.data)
          return response
        })
    },//*
    editUserEducation({commit}, {id, data}){
      return EditProfileEducation({id, data}).then(res => {
        commit('setUserEducation', res.data)
        return res
      })
    },//*
    editUserEducationScan(ctx, {id, scan}){
      return EditProfileEducationScan({id, scan})
    },//*
    getUserEducation ({commit}, id) {
      return GetProfileEducation(id)
        .then(response => {
          if(Object.keys(response.data).length > 1 ){
            commit('setUserEducation', response.data)
            return response
          }

        })
    },//*
    getUsersTop({commit}){
      return GetUsersTop().then(res =>{
        commit('setUserTop', res.data.items)
      })
    },//*
    EditPassword(ctx, data){
         return EditPassword( data)
    },//*
    EditEmail(ctx, data){
         return EditEmail( data)
    },//*
    ChangeAvatar(ctx, data){
      return ChangeAvatar(data)
    },//*
    getFavoritesDiscussion({commit}, page){
      GetDiscussionsFav(page).then( res => {
        commit('setFavoritesDiscussion', res.data.items )
      })
    },//*
    getFavoritesDiscussionAuthors({commit}, page){
      return GetFavoritesAuthors(page).then(res=>{
        commit('setFavoritesDiscussionAuthors', res.data.items)
        return res.data
      })
    },//*
    deleteFavoritesDiscussion({commit}, id){
      return ToggleDiscusionFav(id).then(res =>{
        commit('deleteFavoritesDiscussion', res.data.id)
        return res.data.id
      })
    }, //*






  }
}
