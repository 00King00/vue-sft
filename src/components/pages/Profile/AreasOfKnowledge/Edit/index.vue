<template>
  <div class="center">
    <section class="section-form">
      <div class="h2 m-hid"><h1>{{$lang.profile.knowTitle}}</h1></div>
      <div class="fields-vis fields-vis_add" v-if="knowledge_list">
        <div class="fields_center">
          <div class="fields_center_circ">
            <div class="fields_center_num">{{ balance ? 0 : balance }}</div>
          </div>
          <div class="fields_center_name c-blue">{{$lang.profile.ballCount}}</div>
          <div class="fields_center_txt">{{$lang.profile.globalBall}} {{maxBal}}</div>
          <a href="#" class="btn" @click.prevent="saveBal">{{$lang.profile.save}}</a>
          <a href="#" class="btn" @click.prevent="resetKnowledgeList">Сбросить</a>
        </div>
        <div class="fields">
          <div class="fields_col" v-for="item in knowledge_list" :key="item.id">
            <div class="fields_item fields_item4">

              <circle-slider
                class="slider-circle__item"
                v-model="item.score"
                :text="item.knowledge.title"
                :urlImg="item.knowledge.image"
                :side="190"
                :min="0"
                :max="10"
                :limit="balance"
                :step-size="1"
                :circle-width="10"
                circle-color="#E7E7E7"
                progress-color="#E7E7E7"
                knob-color="#fff"
                :knob-radius="24"
              ></circle-slider>

              <!--<div class="fields_item_num" style="left: 94%; top: 39%;">{{ item.score }}</div>-->
              <!--<div class="fields_item_img"><img :src="item.knowledge.id" alt=""/></div>-->
              <!--<div class="fields_item_txt">-->
                <!--<span class="icon-check" v-if="item.score > 0"></span>-->
                <!--<p>{{ item.knowledge.title }}</p>-->
              <!--</div>-->

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EditAreasOfKnowledge',

  data () {
    return {
      knowledge_list: false,
      knowledgeListStart: [],
      maxBal: 20
    }
  },

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['profile', 'profile_knowledge']),

    balance () {
      return (this.maxBal - this.knowledge_list.reduce((acc, item) => acc + item.score, 0) < 0)
    }

  },

  methods: {
    ...mapActions('profile', ['getUserProfile', 'getUserKnowledges', 'savePrifileKnowledges']),

    async fetchProfile () {
      await this.auth
      await this.getUserProfile(this.auth.id)
      const res = await this.getUserKnowledges(this.auth.id)
      this.knowledge_list = res.data.result
      this.startKnowledgeList()
    },

    saveBal () {
      this.savePrifileKnowledges({
        id: this.auth.id,
        knowledges: this.knowledge_list
      })
        .then(() => {
          this.startKnowledgeList()
        })
        .then(() => {
          this.$router.push('/profile/areas-of-knowledge')
        })
        .catch(err => {
          console.log(err)
        })
    },

    startKnowledgeList () {
      this.knowledgeListStart = this.knowledge_list.map(item => item.score)
    },

    resetKnowledgeList () {
      this.knowledge_list.forEach((item, index) => {
        item.score = this.knowledgeListStart[index]
      })
    }

  },

  created () {
    this.fetchProfile()
  }
}
</script>

<style lang="scss" scoped>
  .fields_item {
    background-color: transparent;
    &:before {
       display: none;
     }
  }

  .slider-circle__item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
