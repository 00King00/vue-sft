import {
  CreateNewDiscussion,
  GetDiscussions,
  GetDiscussion,
  GetAspects,
  GetArguments,
  AddDiscussionArguments
} from '@/api'

export default {
  namespaced: true,

  state: {
    discussions: [],
    discussion: null,
    discussion_aspects: {
      items: []
    },
    discussion_arguments: [],
    discussionButton: true
  },

  mutations: {
    toggleDiscussionButton(state, payload){
      payload ? state.discussionButton = payload : state.discussionButton = !state.discussionButton},
    setDiscussionsList (state, list) {
      state.discussions = list
    },

    setDiscussion (store, item) {
      store.discussion = item
    },

    setDiscussionAspects (store, aspects) {
      store.discussion_aspects = aspects
    },

    setDiscussionArguments (store, aspects) {
      store.discussion_arguments = aspects
    }

  },

  actions: {
    createNewDiscussion (store, data) {
      return CreateNewDiscussion(data)
    },

    getDiscussions (store) {
      return GetDiscussions()
        .then(response => {
          store.commit('setDiscussionsList', response.data)
        })
    },

    getDiscussion (store, id) {
      return GetDiscussion(id)
        .then(response => {
          store.commit('setDiscussion', response.data)
          return response
        })
    },//*

    getDiscussionAspects (store, id) {
      return GetAspects(id)
        .then(response => {
          store.commit('setDiscussionAspects', response.data)
          return response
        })
    },

    getDiscussionArguments (store, id) {
      return GetArguments(id)
        .then(response => {
          store.commit('setDiscussionArguments', response.data)
          return response
        })
    },

    addDiscussionArguments (store, { id, data }) {
      return AddDiscussionArguments(id, data)
    }
  }
}
