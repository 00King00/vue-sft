import {
  CreateNewDiscussion,
  GetDiscussions,
  GetDiscussion,
  GetDiscussionAspects,
  GetDiscussionArguments,
  AddDiscussionArguments
} from '@/api'

export default {
  namespaced: true,

  state: {
    discussions: [],
    discussion: false,
    discussion_aspects: false,
    discussion_arguments: []
  },

  mutations: {
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
          store.commit('setDiscussionsList', response.data.result)
        })
    },

    getDiscussion (store, id) {
      return GetDiscussion(id)
        .then(response => {
          store.commit('setDiscussion', response.data.result)
          return response
        })
    },

    getDiscussionAspects (store, id) {
      return GetDiscussionAspects(id)
        .then(response => {
          store.commit('setDiscussionAspects', response.data.result)
          return response
        })
    },

    getDiscussionArguments (store, id) {
      return GetDiscussionArguments(id)
        .then(response => {
          store.commit('setDiscussionArguments', response.data.result)
          return response
        })
    },

    addDiscussionArguments (store, { id, data }) {
      return AddDiscussionArguments(id, data)
    }
  }
}
