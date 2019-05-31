<template>
  <div class="aspect_item " :class="{'active': active}" @click.prevent="toggle">
    <a href="#" class="aspect_item_img">
      <div class="aspect_item_bg js-bg"><img v-if="item.image_url" :src="$baseUrl + item.image_url" alt="foto"/></div>
      <div class="aspect_item_text">
        <span class="icon-check"></span>
        <p>{{item.title}}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: "Item",
    data() {
      return {
      }
    },
    props: ['item'],
    computed:{
      active(){
        return this.item.is_favorite
      }
    },
    methods:{
      ...mapActions('profile', ['toggleAspects',]),
      toggle(){
        this.toggleAspects(this.item.id).then(res => {
          this.$emit('toggle1', res.data)
        })
      },
    },
  }
</script>

<style scoped>

</style>
