<template>
  <div class="authors_item">
    <a href="#" class="fav_link"
       :class="{'active': isFavorite}"
      @click.prevent="addFavorites">
      <span class="icon-fav"></span>
    </a>
    <div class="authors_item_img"><img :src="author.avatar" alt=""/></div>
    <div class="authors_item_name">{{author.fullname}}</div>
    <div class="authors_item_likes"><span class="icon-like"></span>48k</div>
    <div class="authors_item_info">
      <div class="authors_item_info_in">
        <div class="authors_info_circ"><span class="icon-i3"></span></div>
        <div class="authors_info_circ"><span class="icon-i4"></span></div>
        <div class="authors_info_circ"><span class="icon-i5"></span></div>
      </div>
    </div>
  </div>
</template>

<script>


import { mapActions, mapState } from 'vuex'
export default {
  name: 'UserItem',

  props: {
    author: {
      type: Object,
      default: () => {}
    }
  },





  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['usersFavorite']),
    isFavorite () {
      return this.usersFavorite.find(item => item.id === this.author.id)
    }
  },

  methods: {
    ...mapActions('profile', ['addFavoritesUsers', 'getFavoriteUsers']),

    addFavorites () {
      this.addFavoritesUsers({
        id: this.auth.id,
        object_id: this.author.id
      })
    }
  },

  created () {
    if (this.usersFavorite.length <= 0) { this.getFavoriteUsers(this.auth.id) }
  }
}
</script>

<style scoped>

</style>
