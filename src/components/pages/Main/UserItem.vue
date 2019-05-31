<template>
  <div class="authors_item" @click.prevent="cardEvent">
    <a href="#" class="fav_link"
       :class="{'active': author.is_favorite}">
      <span class="icon-fav"></span>
    </a>
    <div class="authors_item_img"><img v-if="author.avatar_url" :src="$baseUrl+author.avatar_url" alt="avatar"/></div>
    <div class="authors_item_name">{{author.fullname}}</div>
    <div class="authors_item_likes"><span class="icon-like"></span>{{author.total_likes}}</div>
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
export default {
  name: 'UserItem',

  props: {
    author: {
      type: Object,
    }
  },
  methods: {
    cardEvent($event){
      if($event.target.className == "icon-fav"){
        this.$store.dispatch('profile/toggleDiscusionAuthorFav',this.author.id).then(disc =>{
          this.$store.commit('profile/replaceDiscusionAuthorFav', {id : disc.id, is_favorite: disc.is_favorite})
        })
      }else{
        //this.$router.push('/discussion/' + this.item.id)
      }
    }
  },
}
</script>

<style scoped>

</style>
