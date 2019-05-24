<template>
  <div class="aspect aspect-fav">
    <div
      class="aspect_item"
      v-for="aspect in favorite_aspects"
      :key="aspect.id">
      <div class="aspect_item_img">
        <div class="aspect_item_bg js-bg"><img :src="aspect.image" :alt="aspect.title"/></div>
        <div class="aspect_item_text"><span class="icon-check"></span><p>{{ aspect.title }}</p></div>
      </div>
      <a href="#" class="fav_link active" @click.prevent="removeAspect(aspect.id)"><span class="icon-fav"></span></a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FavoriteAspects',

  computed: {
    ...mapState('profile', ['favorite_aspects']),
    ...mapState('auth', ['auth'])
  },

  methods: {
    ...mapActions('profile', ['getUserFavoriteAspects', 'deleteFavoritesAspects']),

    removeAspect (id) {
      this.deleteFavoritesAspects({
        id: this.auth.id,
        object_id: id
      })
    }
  },

  mounted () {
    if (this.favorite_aspects.length <= 0) { this.getUserFavoriteAspects(this.auth.id) }
  }
}
</script>

<style scoped>

</style>
