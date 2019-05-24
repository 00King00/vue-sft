import {
  GetProfile,
  GetProfileEducation,
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
    profile_education: false,
    all_aspects: [],
    favorite_aspects: [],
    favoritesDiscussion: [],
    favoritesDiscussions: [],
    favoritesAspect: [],
    usersFavorite: [],
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
    },

    setUserFavoriteAspects (state, aspects) {
      state.favorite_aspects = aspects
    },

    addCustomAspect (state, aspect) {
      state.favorite_aspects.push(aspect)
    },

  },

  actions: {
    GetAllAspects ({commit}){
      return GetAllAspects().then( res => {
        commit('setAllAspects', res.data.items)
        return res
      })
    },//*
    toggleAspects(context, id){
      return ToggleAspects(id)
    },
    getUserProfile (store, id) {
      return GetProfile(id)
        .then(response => {
          store.commit('setUserProfile', response.data)
          return response
        })
    },

    getUserEducation (store, id) {
      return GetProfileEducation(id)
        .then(response => {
          store.commit('setUserEducation', response.data)
          return response
        })
    },

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
    },
    EditEmail(ctx, data){
         return EditEmail( data)
    },
    ChangeAvatar(ctx, data){
      return ChangeAvatar(data)
    },
    




  }
}
