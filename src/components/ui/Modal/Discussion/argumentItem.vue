<template>

  <div @click.prevent="selected" class="aspect_item" :class="{active}">

    <a href="#" class="aspect_item_img">

      <div class="aspect_item_bg js-bg">

        <img :src="urlImg" :alt="title"/>

      </div>

      <div class="aspect_item_text">

        <span class="icon-check"></span>

        <p>{{ title }}</p>

      </div>

    </a>

  </div>

</template>

<script>
export default {
  name: 'argumentItem',

  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    urlImg: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      active: false
    }
  },

  methods: {
    selected () {
      this.active = !this.active
      this.$emit('selected', this.id)
    }
  }
}
</script>

<style scoped>

</style>
