<template>
  <div class="posts_item" >
    <!--<router-link :to="'/discussion/' + item.id" class="cover_link"></router-link>-->
    <!--@click.prevent="$router.push('/discussion/' + item.id)"-->
    <div class="posts_item_img">
      <img :src="item.image" alt=""/>
      <div class="truefalse"><span>{{ item.voutes.against }}%</span><span>{{ item.voutes.against }}%</span></div>
    </div>
    <div class="posts_item_cont">
      <div class="posts_item_title">{{ item.title }}</div>
      <div class="posts_item_bot">
        <div class="posts_item_author">{{$lang.main.authorWrap}}: <b>{{ item.author.fullname }}</b></div>
        <a href="#" :class="{'active': isFavorite}" class="fav_link" @click.prevent="addDiscussion"><span class="icon-fav"></span></a>
        <!-- <div class="posts_item_date">19.07.2018</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ThemeItem',

  props: ['item'],

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['favoritesDiscussions']),
    isFavorite () {
      return this.favoritesDiscussions.find(item => item.id === this.item.id)
    }
  },

  methods: {
    ...mapActions('profile', ['addFavoritesDiscussion', 'favoritesDiscussion']),
    addDiscussion () {
      this.addFavoritesDiscussion({ id: this.auth.id, object_id: this.item.id })
    }
  },

  created () {
    if (this.favoritesDiscussions.length <= 0) { this.favoritesDiscussion(this.auth.id) }
  }
}
</script>

<style scoped>

</style>
