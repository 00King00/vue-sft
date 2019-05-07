<template>
  <div class="country_wr">
    <div class="country_title">{{$lang.descAdd.select}}</div>
    <div class="aspect aspect-check">

      <Item v-for="item in aspects" :key="item.title" :item="item"/>

      <div class="aspect_item aspect_item_plus">
        <a href="#" @click.prevent="addModal({name: 'DiscussionAdd'})">
          <div class="aspect_item_add">
            <span class="icon-plus"></span>
            <span>Add</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: "Aspects",

  components: { Item },

  props: ['aspects']
}
</script>

<style scoped>

</style>
