<template>
  <div class="posts_item" @click.prevent="$router.push('/discussion/' + item.id)">
    <div class="posts_item_img">
        <img v-if="item.image_url" :src="$baseUrl + item.image_url" alt="foto"/>
      <div class="truefalse"><span>{{ item.votes.true }}%</span><span>{{ item.votes.false }}%</span></div>
    </div>
    <div class="posts_item_cont">
      <div class="posts_item_title">{{ item.title }}</div>
      <div class="posts_item_bot">
        <div class="posts_item_author">{{$lang.main.authorWrap}}: <b>{{ item.author.fullname }}</b></div>
        <a href="#" :class="{'active': isFavorite}" class="fav_link" @click.prevent="addDiscussion"><span class="icon-fav"></span></a>
        <div class="posts_item_date">{{item.created_at}}</div>
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
    //...mapState('profile', ['favoritesDiscussions']),
    isFavorite () {
      //return this.favoritesDiscussions.find(item => item.id === this.item.id)
      return true
    }
  },

  methods: {
    //...mapActions('profile', ['addFavoritesDiscussion', 'favoritesDiscussion']),
    addDiscussion () {
      this.addFavoritesDiscussion({ id: this.auth.id, object_id: this.item.id })
    }
  },

  created () {
    //if (this.favoritesDiscussions.length <= 0) { this.favoritesDiscussion(this.auth.id) }
  }
}
</script>

<style scoped>

</style>
