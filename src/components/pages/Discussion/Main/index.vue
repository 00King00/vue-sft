<template>
  <div class="center">
    <section class="section_discussion" v-if="discussion">
      <div class="h2"><h1>{{ discussion.title }}</h1></div>
      <div class="country_libra">
        <div class="country_libra_in">
          <div class="country_libra_svg"></div>
          <div class="c_b blue_c">
            <span class="icon-check"></span>
            <v-progress-circular  :size="circleSizeTrue"  :value="discussion.votes.true" color="blue" width="12" rotate="-90">{{discussion.votes.true}}%</v-progress-circular>
          </div>
          <div class="c_b blue_r">
            <span class="icon-close"></span>
            <v-progress-circular :size="circleSizeFalse"  :value="discussion.votes.false" color="red" width="12" rotate="-90">{{discussion.votes.false}}%</v-progress-circular>
          </div>
        </div>
      </div>

      <Aspects :aspects="discussion_aspects.items"/>

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
    }
  },

  components: { Aspects, Argument },

  computed: {
    ...mapState('discussion', ['discussion', 'discussion_aspects', 'discussion_arguments']),
    circleSizeTrue(){
      if(this.discussion.votes.true >= this.discussion.votes.true ){
        return 174
      } else {return 100}
    },
    circleSizeFalse(){
      if(this.discussion.votes.true <= this.discussion.votes.true ) {
        return 174
      } else {return 100}
    }
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
  .c_b{
    background: none;
    width: auto;
    height: auto;
    background: none;
  }
</style>
