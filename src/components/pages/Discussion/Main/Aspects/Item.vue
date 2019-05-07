<template>
  <div class="aspect_item " :class="{'active': active}" @click="active = !active">
    <a href="#" class="aspect_item_img">
      <div class="aspect_item_bg js-bg"><img :src="item.image" alt=""/></div>
      <div class="aspect_item_text">
        <span class="icon-check"></span>
        <p>{{item.title}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Item",
    data() {
      return {
        active: false
      }
    },
    props: ['item']
  }
</script>

<style scoped>

</style>
