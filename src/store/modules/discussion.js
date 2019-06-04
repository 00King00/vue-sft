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
    paginationSetting:{
      total_pages: null,
      total_items: null,
      items_per_page: null,
    }
  },
  mutations: {
    setPaginationSetting(state, {total_pages, total_items, items_per_page}){
      state.paginationSetting = {total_pages, total_items, items_per_page}
    },//*
    setAllDiscusion(state, {page, items}){
      state.discussionsAll.push({page, items})
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
    },//*
    replaceDiscussionTop(store, {id, is_favorite}){
      store.discussionsTop.find((disc, index) =>{
        if(disc.id == id){
          store.discussionsTop[index].is_favorite = is_favorite
        }
      })
    },//*
    replaceDiscussionAll(store, {id, is_favorite, page}){
      console.log({id, is_favorite, page})
      store.discussionsAll.find((disc, index) =>{
        if(disc.page == page){
          console.log(store.discussionsAll[index])
          store.discussionsAll[index].items.find((d, i)=>{
            if(d.id == id){ store.discussionsAll[index].items[i].is_favorite = is_favorite}
          })
        }
      })
    },//*
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
    getDiscussionsAll({commit, state}, page){
      if(state.discussionsAll.length == 0){
        return GetAllDiscussion(page).then(res =>{
          commit('setAllDiscusion', {items: res.data.items, page})
          commit('setPaginationSetting', {
            total_pages: res.data.total_pages,
            total_items: res.data.total_items,
            items_per_page: res.data.items_per_page,
            itemsPerPage: 1
          })
          return res.data
        })
      }else if(!state.discussionsAll.some(item =>{ return item.page == page})){
        return GetAllDiscussion(page).then(res =>{
          commit('setAllDiscusion', {items: res.data.items, page})
          return true
        })
      }

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
