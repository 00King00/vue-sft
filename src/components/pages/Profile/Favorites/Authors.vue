<template>
  <div class="authors">
    <div class="authors_item" style="height: auto;"
         v-for="author in usersFavorite" :key="author.id">
      <a href="#"
         class="fav_link active">
        <span class="icon-fav"></span>
      </a>
      <div class="authors_item_img">
        <img :src="author.avatar" alt="">
      </div>
      <div class="authors_item_name">{{author.fullname}}</div>
      <a href="#" class="win_close"
         @click.prevent="deleteFavorites(author.id)">
        <span class="icon-cab7"></span>
      </a>
      <!-- <div class="authors_item_likes"><span class="icon-like"></span>48k</div> -->
      <!-- <div class="authors_item_info">
        <div class="authors_item_info_in">
          <div class="authors_info_circ"><span class="icon-i3"></span></div>
          <div class="authors_info_circ"><span class="icon-i4"></span></div>
          <div class="authors_info_circ"><span class="icon-i5"></span></div>
          <div class="authors_info_circ"><span class="icon-i6"></span></div>
          <div class="authors_info_circ"><span class="icon-i1"></span></div>
          <div class="authors_info_circ"><span class="icon-i2"></span></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Authors',

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['usersFavorite'])
  },

  methods: {
    ...mapActions('profile', ['deleteFavoriteUsers', 'getFavoriteUsers']),

    deleteFavorites (object_id) {
      this.deleteFavoriteUsers({
        id: this.auth.id,
        object_id: object_id
      })
    }
  },

  created () {
    if (this.usersFavorite.length <= 0) { this.getFavoriteUsers(this.auth.id) }
  }
}
</script>

<style scoped>
  .win_close {
    top: 5px;
    visibility: hidden;
    right: 5px;
    opacity: 0;
    transition: 0.2s ease;
  }

  .authors_item:hover .win_close {
    visibility: visible;
    opacity: 1;
  }

  .authors_item:hover .fav_link{
    display: none;
  }
</style>
