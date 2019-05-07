<template>
  <div class="center">
    <section class="section-form">
    <div class="h2 m-hid"><h1>{{ $lang.profile.knowTitle }}</h1></div>
      <div class="fields-vis" style="height: 750px;">
        <div class="fields_center">
          <div class="fields_center_circ">
            <div class="fields_center_ava"><img :src="profile.avatar" alt=""></div>
          </div>
          <div class="fields_center_name">{{  profile.fullname  }}</div>
          <router-link to="/profile/areas-of-knowledge/edit" class="btn btn-bord-blue">{{$lang.profile.edit}}</router-link>
        </div>

        <div class="fields">

          <div class="fields_col" v-for="item in profile_knowledge" :key="item.id">
            <div class="fields_item fields_item4">
              <circle-slider
                class="slider-circle__item"
                v-model="item.score"
                :text="item.knowledge.title"
                :urlImg="item.knowledge.image"
                :side="190"
                :min="0"
                :max="10"
                :disabled="false"
                :step-size="1"
                :circle-width="10"
                circle-color="#E7E7E7"
                progress-color="#E7E7E7"
                knob-color="#fff"
                :knob-radius="24"
              ></circle-slider>
              <!--<div class="fields_item_num" style="left: 94%; top: 39%;">{{ item.score }}</div>-->
              <!--<div class="fields_item_img"><img :src="item.knowledge.image" alt=""></div>-->
              <!--<div class="fields_item_txt">-->
              <!--<span class="icon-check" v-if="item.score > 0"></span>-->
                <!--<p>{{ item.knowledge.title }}</p>-->
              <!--</div>-->
            </div>
        </div>

        </div>
      </div>
      <div class="txt_exp"><p>{{$lang.profile.knowDesc}}</p></div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainAriasOfKnowledge',

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['profile', 'profile_knowledge'])
  },

  methods: {
    ...mapActions('profile', ['getUserProfile', 'getUserKnowledges']),
    async fetchProfile () {
      await this.auth
      await this.getUserProfile(this.auth.id)
      await this.getUserKnowledges(this.auth.id)
    }
  },

  created () {
    this.fetchProfile()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../../assets/css/circle.css';

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
