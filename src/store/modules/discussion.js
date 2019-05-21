import {
  CreateNewDiscussion,
  GetDiscussions,
  GetDiscussion,
  GetDiscussionAspects, //*
  GetDiscussionArguments, //*
  AddDiscussionArguments
} from '@/api'

export default {
  namespaced: true,

  state: {
    discussions: [],
    discussion: null,
    discussion_aspects: [],
    discussion_arguments: [],
    resDiscussionArguments: null,
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
      store.discussion_aspects.push(aspects)
    },//*
    setDiscussionArguments (store, payload) {
      store.discussion_arguments  =payload.items
      store.resDiscussionArguments = payload
    }//*

  },

  actions: {
    createNewDiscussion (store, data) {
      return CreateNewDiscussion(data) //*0
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
      return GetDiscussionAspects(id)
        .then(response => {
          store.commit('setDiscussionAspects', response.data)
          return response
        })
    },//*

    getDiscussionArguments (store, id) {
      return GetDiscussionArguments(id)
        .then(response => {
          store.commit('setDiscussionArguments', response.data)
          return response
        })
    },//*

    addDiscussionArguments (store, { id, data }) {
      return AddDiscussionArguments(id, data)
    }
  }
}
