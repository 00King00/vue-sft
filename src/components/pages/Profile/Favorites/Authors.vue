<template>
  <div class="authors">
    <v-container grid-list-lg class="pa-0">
      <v-layout row wrap >
          <v-flex xs6 sm3 md4  v-for="author in favoritesAuthors" :key="author.id">
            <div class="authors_item" style="height: auto;">
              <a href="#"
                 class="fav_link active">
                <span class="icon-fav"></span>
              </a>
              <div class="authors_item_img">
                <img v-if="author.avatar_url" :src="$baseUrl+author.avatar_url" alt="foto">
              </div>
              <div class="authors_item_name">{{author.fullname}}</div>
              <a href="#" class="win_close"
                 @click.prevent="deleteFavorites(author.id)">
                <span class="icon-cab7"></span>
              </a>
              <div class="authors_item_likes"><span class="icon-like"></span>48k</div> -->
              <div class="authors_item_info">
                <div class="authors_item_info_in">
                  <div class="authors_info_circ"><span class="icon-i3"></span></div>
                  <div class="authors_info_circ"><span class="icon-i4"></span></div>
                  <div class="authors_info_circ"><span class="icon-i5"></span></div>
                  <div class="authors_info_circ"><span class="icon-i6"></span></div>
                  <div class="authors_info_circ"><span class="icon-i1"></span></div>
                  <div class="authors_info_circ"><span class="icon-i2"></span></div>
                </div>
              </div>
            </div>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Authors',
  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['favoritesAuthors'])
  },

  methods: {
  ...mapActions('profile', ['getFavoritesDiscussionAuthors', 'toggleDiscusionAuthorFav']),
    deleteFavorites (id) {
      this.toggleDiscusionAuthorFav(id).then((res) =>{
        this.$emit('removeAuthor', id)
        this.$store.commit('profile/removeFavoritesDiscussionAuthors', res.id)
      })
    }
  },
  created(){
    if (this.favoritesAuthors.length == 0) { this.getFavoritesDiscussionAuthors(1) }
  },


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
