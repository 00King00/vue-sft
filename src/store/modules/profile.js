import {
  GetProfileId,//*
  GetProfileEducation,//*
  EditProfileEducation,//*
  EditProfileEducationScan,//*
  GetUsersTop,//*
  ToggleDiscusionAuthorFav,//*
  GetProfileRewards,
  GetProfileKnowledges,
  SavePrifileKnowledges,
  EditPassword,//*
  EditEmail,//*
  ChangeAvatar,//*
  GetAllAspects,//*
  ToggleAspects, //*

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
    usersTop: []
  },

  mutations: {
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

    setUserFavoriteAspects (state, aspects) {
      state.favorite_aspects = aspects
    },

    addCustomAspect (state, aspect) {
      state.favorite_aspects.push(aspect)
    },//*
    replaceDiscusionAuthorFav(store, {id, is_favorite}){
      store.usersTop.find((disc, index) =>{
        if(disc.id == id){
          store.usersTop[index].is_favorite = is_favorite
        }
      })
    },

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
    getUserRewards (store, id) {
      return GetProfileRewards(id)
        .then(response => {
          store.commit('setUserRewards', response.data)
          return response
        })
    },

    getUserKnowledges (store, id) {
      return GetProfileKnowledges(id)
        .then(response => {
          store.commit('setUserKnowledges', response.data)
          return response
        })
    },

    async savePrifileKnowledges (store, { id, knowledges }) {
      for (let item of knowledges) {
        await SavePrifileKnowledges(id, item.knowledge.id, item.score)
      }
    },

    EditPassword(ctx, data){
         return EditPassword( data)
    },//*
    EditEmail(ctx, data){
         return EditEmail( data)
    },//*
    ChangeAvatar(ctx, data){
      return ChangeAvatar(data)
    },//*





  }
}
