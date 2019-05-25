<template>
  <div class="aspect_item " :class="{'active': active}" @click.prevent="toggle">
    <a class="aspect_item_img">
      <div class="aspect_item_bg js-bg"><img v-if="item.image_url" :src="$baseUrl + item.image_url" alt="foto"/></div>
      <div class="aspect_item_text"><span class="icon-check"></span><p>{{item.title}}</p></div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Item",
    data(){
      return{
        active: false
      }
    },
    props: ['item'],
    methods:{
      toggle(){
        this.active = !this.active
        if(this.active){
          this.$emit('checkedAspect')
        }else{this.$emit('checkOffAspect')}
      }
    }
  }
</script>

<style scoped>

</style>
