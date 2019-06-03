import {
  CreateNewDiscussion,//*
  GetDiscussions,//*
  GetAllDiscussion,//*
  GetDiscussionsTop, //*
  GetDiscussionsLast, //*
  ToggleDiscusionFav,//*
  GetDiscussion,
  //GetDiscussionAspects, // not necassery*
  GetDiscussionArguments, //*
  AddDiscussionArguments
} from '@/api'

export default {
  namespaced: true,

  state: {
    discussions: [],
    discussion: null,
    discussion_aspects: [],
    selected_aspects: [],
    discussion_arguments: [],
    resDiscussionArguments: null,
    discussionButton: true,
    searchedDiscusion: [],
    discussionsTop: [],
    discussionsLast: [],
    discussionsAll: [],
  },

  mutations: {
    setAllDiscusion(state, payload){
      state.discussionsAll[150] = true,
      state.discussionsAll.splice(0,20, ...payload)
    },//*
    pushAllDiscusionPage(state, {page, items_per_page, items}){
      let curItem = page*items_per_page - items_per_page;
      //state.discussionsAll.splice(curItem, items_per_page, ...items)
    },//*
    setFilteredDiscusion(state, payload){
      state.searchedDiscusion = payload
    },//*
    setSelectedAspects(state, payload){
      state.selected_aspects.push(payload)
    },//*
    deleteSelectedAspects(state, payload){
      state.selected_aspects = state.selected_aspects.filter(function(item) {
        return item !== payload
    })
    },
    toggleDiscussionButton(state, payload){
      payload ? state.discussionButton = payload : state.discussionButton = !state.discussionButton}, //*
    setDiscussionsList (state, list) {
      state.discussions = list
    },//*
    setDiscussion (store, item) {
      store.discussion = item
    },
    setDiscussionsTop(store, payload){
      store.discussionsTop = payload.items
    },//*
    replaceDiscussionLast(store, {id, is_favorite}){
      store.discussionsLast.find((disc, index) =>{
        if(disc.id == id){
          store.discussionsLast[index].is_favorite = is_favorite
        }
      })
    },
    replaceDiscussionTop(store, {id, is_favorite}){
      store.discussionsTop.find((disc, index) =>{
        if(disc.id == id){
          store.discussionsTop[index].is_favorite = is_favorite
        }
      })
    },
    setDiscussionsLast(store, payload){
      store.discussionsLast = payload.items
    },//*
    // setDiscussionAspects (store, aspects) {
    //   store.discussion_aspects.push(aspects)
    // },// not necassery*
    setDiscussionArguments (store, payload) {
      store.discussion_arguments  =payload.items
      store.resDiscussionArguments = payload
    }//*

  },

  actions: {
    createNewDiscussion (store, data) {
      return CreateNewDiscussion(data) //*
    },
    toggleDiscusionFav(ctx, id){
      return ToggleDiscusionFav(id).then(res =>{
        return res.data
      })
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
    getDiscussionsTop({commit}){
      return GetDiscussionsTop().then(res =>{
        commit('setDiscussionsTop', res.data)
      })
    },//*
    getDiscussionsLast({commit}){
      return GetDiscussionsLast().then(res =>{
        commit('setDiscussionsLast', res.data)
      })
    },//*
    getDiscussionsAll({commit}, page){
      return GetAllDiscussion(page).then(res =>{
        commit('setAllDiscusion', res.data.items)
        return res.data
      })
    },
    // getDiscussionAspects (store, id) {
    //   return GetDiscussionAspects(id)
    //     .then(response => {
    //       store.commit('setDiscussionAspects', response.data)
    //       return response
    //     })
    // },//*

    getDiscussionArguments (store, id) {
      return GetDiscussionArguments(id)
        .then(response => {
          store.commit('setDiscussionArguments', response.data)
          return response
        })
    },//

    addDiscussionArguments (store, { id, data }) {
      return AddDiscussionArguments(id, data)
    }
  }
}
