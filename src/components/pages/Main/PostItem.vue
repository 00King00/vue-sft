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
        <a href="#" class="fav_link"><span class="icon-fav"></span></a>
        <div class="posts_item_date">{{item.created_at}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ['item']
}
</script>

<style scoped>

</style>
