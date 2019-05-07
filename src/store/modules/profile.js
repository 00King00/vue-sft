import {
  GetProfile,
  GetProfileEducation,
  GetProfileRewards,
  GetProfileKnowledges,
  SavePrifileKnowledges,

  EditProfile,
  EditProfileEducation,

  AddFavoritesDiscussion,
  FavoritesDiscussion,
  DeleteFavoritesDiscussion,

  GetProfileFavoriteAspects,
  AddFavoritesAspects,
  // FavoritesAspects,
  DeleteFavoritesAspects,

  UsersTop,
  GetFavoriteUsers,
  AddFavoriteUsers,
  DeleteFavoriteUsers,

  DeleteUser,

  FilterFfavoriteDisquss

} from '@/api'

export default {
  namespaced: true,

  state: {
    profile: false,
    profile_rewards: [],
    profile_knowledge: [],
    profile_education: false,
    favorite_aspects: [],
    favoritesDiscussion: [],
    favoritesDiscussions: [],
    favoritesAspect: [],
    usersFavorite: [],
    usersTop: []
  },

  mutations: {
    setUserProfile (state, profile) {
      state.profile = profile
    },

    setUserEducation (state, education) {
      state.profile_education = education
    },

    setUserRewards (state, rewards) {
      state.profile_rewards = rewards
    },

    setUserKnowledges (state, knowledges) {
      state.profile_knowledge = knowledges
    },

    setUserFavoriteAspects (state, aspects) {
      state.favorite_aspects = aspects
    },

    addCustomAspect (state, aspect) {
      state.favorite_aspects.push(aspect)
    },

    addFavoritesDiscussions (state, payload) {
      state.favoritesDiscussion = payload
    },

    favoritesDiscussions (state, payload) {
      state.favoritesDiscussions = payload
    },

    addFavoritesAspects (state, payload) {
      state.favoritesAspect = payload
    },

    favoriteUsers (state, payload) {
      state.usersFavorite = payload
    },

    topUsers (state, payload) {
      state.usersTop = payload
    }
  },

  actions: {
    getUserProfile (store, id) {
      return GetProfile(id)
        .then(response => {
          store.commit('setUserProfile', response.data.result)
          return response
        })
    },

    getUserEducation (store, id) {
      return GetProfileEducation(id)
        .then(response => {
          store.commit('setUserEducation', response.data.result)
          return response
        })
    },

    getUserRewards (store, id) {
      return GetProfileRewards(id)
        .then(response => {
          store.commit('setUserRewards', response.data.result)
          return response
        })
    },

    getUserKnowledges (store, id) {
      return GetProfileKnowledges(id)
        .then(response => {
          store.commit('setUserKnowledges', response.data.result)
          return response
        })
    },

    async savePrifileKnowledges (store, { id, knowledges }) {
      for (let item of knowledges) {
        await SavePrifileKnowledges(id, item.knowledge.id, item.score)
      }
    },

    editUser (store, data) {
      return EditProfile(data.id, data)
    },

    editUserEducation (store, data) {
      return EditProfileEducation(data.id, data)
    },

    getUserFavoriteAspects (store, id) {
      return GetProfileFavoriteAspects(id)
        .then(response => {
          store.commit('setUserFavoriteAspects', response.data.result)
          return response
        })
    },

    addFavoritesAspects ({ commit }, { id, object_id }) {
      return AddFavoritesAspects(id, object_id)
        .then(res => commit('addFavoritesAspects', res.data.result))
    },

    deleteFavoritesAspects ({ dispatch }, { id, object_id }) {
      return DeleteFavoritesAspects(id, object_id)
        .then(() => dispatch('getUserFavoriteAspects', id))
    },

    addFavoritesDiscussion ({ commit, dispatch }, { id, object_id }) {
      return AddFavoritesDiscussion(id, object_id)
        .then(res => commit('addFavoritesDiscussions', res.data.result))
        .then(() => dispatch('favoritesDiscussion'))
    },

    favoritesDiscussion ({ commit }, id) {
      return FavoritesDiscussion(id)
        .then(res => commit('favoritesDiscussions', res.data.result))
    },

    deleteFavoritesDiscussion ({ dispatch }, { id, object_id }) {
      return DeleteFavoritesDiscussion(id, object_id)
        .then(() => dispatch('favoritesDiscussion', id))
    },

    getUsersTop (store) {
      return UsersTop()
        .then(res => store.commit('topUsers', res.data.top))
    },

    getFavoriteUsers ({ commit }, id) {
      return GetFavoriteUsers(id)
        .then(res => commit('favoriteUsers', res.data.result))
    },

    addFavoritesUsers ({ dispatch }, { id, object_id }) {
      return AddFavoriteUsers(id, object_id)
        .then(() => dispatch('getFavoriteUsers', id))
    },

    deleteFavoriteUsers ({ dispatch }, { id, object_id }) {
      return DeleteFavoriteUsers(id, object_id)
        .then(() => dispatch('getFavoriteUsers'))
    },

    deleteUser (cxt, id) {
      return DeleteUser(id)
        .then(res => res)
    },

    filterFavoriteDisquss ({ commit }, { id, data }) {
      return FilterFfavoriteDisquss(id, data)
        .then(res => commit('favoritesDiscussions', res.data.result))
    }
  }
}
