<template>
  <div class="center">
    <section class="section_discussion" v-if="discussion">
      <div class="h2"><h1>{{ discussion.title }}</h1></div>
      <div class="country_libra">
        <div class="country_libra_in">
          <div class="country_libra_svg"></div>
          <div class="c_b blue_c"><span class="icon-check"></span><span class="c_b_val">{{ discussion.votes.true }}%</span></div>
          <div class="c_b blue_r"><span class="icon-close"></span><span class="c_b_val">{{ discussion.votes.false }}%</span></div>
        </div>
      </div>

      <Aspects :aspects="discussion_aspects"/>

      <div class="country_wr">
        <div class="country_title">{{$lang.descAdd.arg}}:</div>
        <div class="disc">
          <Argument :item="{}" />

          <div class="disc_line_plus" @click.prevent="addModal({name: 'DiscussionArgument'})"><a href="#"><span class="icon-plus"></span><span>Add</span></a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Aspects from './Aspects'
import Argument from './Argument'

export default {
  name: 'MainDiscussion',

  data () {
    return {
      // discussionTest: {
      //   title: "Ести ли жизнь на Земле?",
      //   voutes: {fore: 80, against: 20},
      // },
    }
  },

  components: { Aspects, Argument },

  computed: {
    ...mapState('discussion', ['discussion', 'discussion_aspects', 'discussion_arguments'])
  },

  methods: {
    ...mapActions('modal', ['addModal']),
    ...mapActions('discussion', ['getDiscussion', 'getDiscussionAspects', 'getDiscussionArguments']),

    async fetch () {
      await Promise.all([
        this.getDiscussionArguments(this.$route.params.id),
        this.getDiscussion(this.$route.params.id),
        this.getDiscussionAspects(this.$route.params.id)])
    }
  },

  created () {
    this.fetch()
  }
}
</script>

<style scoped>

</style>
