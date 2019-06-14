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

      <Aspects :aspects="discussion.aspects"/>

      <div class="country_wr">
        <div class="country_title">{{$lang.descAdd.arg}}:</div>
        <div class="disc">
          <Argument v-for="(argument, index) in filterArgument" :argument="argument" :key="`argument_${index}`" :propThesis="thesis"/>
          <div class="disc_line_plus" @click.prevent="addModal({name: 'ModalArgument'})"><a href="#"><span class="icon-plus"></span><span>Add</span></a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {GetCurrentDiscussions} from '@/api'
import Aspects from './Aspects'
import Argument from './Argument'

export default {
  name: 'MainDiscussion',

  data () {
    return {
      discussion: null,
      thesis: null,
    }
  },

  components: { Aspects, Argument },

  computed: {
    ...mapState('discussion', ['discussion_arguments', 'selected_aspects']),
    filterArgument(){
      if(this.selected_aspects.length == 0){
        return this.discussion_arguments
      }else{
        let arr = [];
        this.discussion_arguments.forEach(arg =>{
          let res;
          let aspect_ids = arg.aspect_ids;
          aspect_ids.some(item =>{
            this.selected_aspects.forEach(selected_aspect =>{
              if (selected_aspect == item) res = true
            })
          })

          if(res) arr.push(arg)

        })
        return arr
      }
    },
    circleSizeTrue(){
      if(this.discussion.votes.true >= this.discussion.votes.false ){
        return 174
      } else {return 150}
    },
    circleSizeFalse(){
      if(this.discussion.votes.true <= this.discussion.votes.false ) {
        return 174
      } else {return 150}
    }
},

  methods: {
    ...mapActions('modal', ['addModal']),
    ...mapActions('discussion', ['getDiscussionArguments']),

    async fetch () {
      await Promise.all([
        this.getDiscussionArguments(this.$route.params.id),
        GetCurrentDiscussions(this.$route.params.id).then(res => {this.discussion = res.data}),
      ])
    }
  },
  mounted() {
    this.$store.subscribe((mutation, state)=>{
      switch(mutation.type){
        case 'discussion/pushDiscussionThesis': {
          const status = state.discussion.argument_thesis;
          this.thesis = status;
          break;
        }
      }
    });
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
