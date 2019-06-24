<template lang="html">
  <div class="center">
    <div class="h2"><h1>Author: </h1></div>
    <v-container grid-list-lg class="pa-0">
      <v-layout row wrap >
        <v-flex xs12 class="text-xs-center">
          <v-pagination circle v-if="discussionsAll.length > 0" v-model="page" :length="total_pages" @click.native="fetchDiscussions"></v-pagination>
        </v-flex>
        <v-flex xs6 sm3 md4 v-for="item in itemsPerPage" :key="item.id">
            <DiscussionCard :eventModel="true" :item="item" @fav-toggle="toggleFavorite"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DiscussionCard from '@/components/pages/Main/ThemeItem'
import { mapState, mapActions } from 'vuex'
export default {
  name: "Author",
  data() {
    return {
      showFilter: false,
      page: 1,
      total_pages: null,
      total_items: null,
      items_per_page: null,
      itemsPerPage: [],
      discussions: []
    }
  },
  components:{ DiscussionCard },
  computed:{
    ...mapState('authors', ['authors_discussion', 'paginationSetting']),
  },
  methodts:{
    ...mapActions('authors', ['getAuthorDiscussions'])
  },
  created(){
    if (this.authors_discussion.length == 0) {
      this.getAuthorDiscussions({id: this.$route.params.id, page: this.page}).then(res =>{
        this.total_pages = res.total_pages
        this.total_items = res.total_items
        this.items_per_page = res.items_per_page
        this.itemsPerPage = this.authors_discussion[0].items
      })
    }else{
      this.total_pages = this.paginationSetting.total_pages
      this.total_items = this.paginationSetting.total_items
      this.items_per_page = this.paginationSetting.items_per_page
      this.itemsPerPage = this.authors_discussion[0].items
    }
  }


}
</script>

<style lang="css" scoped>
</style>
