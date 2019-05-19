<template>
  <div class="aspect_item " :class="{'active': active}">
    <a class="aspect_item_img">
      <div class="aspect_item_bg js-bg"><img :src="image" alt=""/></div>
      <div class="aspect_item_text"><span class="icon-check"></span><p>{{item.title}}</p></div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item', 'active'],
    computed: {
      image () {
        if (this.item.image_url && typeof this.item.image_url === 'string') {
          return this.item.image
        } else if(this.item.image_url === null) {
          return false
        }else{ return URL.createObjectURL(this.item.image_url) }
      }
    }
  }
</script>

<style scoped>

</style>
