<template>
  <div class="center">
    <section class="section-form">
      <div class="h2 m-hid"><h1>{{$lang.profile.knowTitle}}</h1></div>
      <div class="fields-vis fields-vis_add" v-if="knowledge_list">
        <div class="fields_center">
          <div class="fields_center_circ">
            <div class="fields_center_num">{{balance}}</div>
          </div>
          <div class="fields_center_name c-blue">{{$lang.profile.ballCount}}</div>
          <div class="fields_center_txt">{{$lang.profile.globalBall}} {{maxBal}}</div>
          <a href="#" class="btn" @click.prevent="saveBal">{{$lang.profile.save}}</a>
          <a href="#" class="btn" @click.prevent="resetKnowledgeList">Сбросить</a>
        </div>
        <div class="fields">
          <div class="fields_col" v-for="(item, index) in knowledge_list" :key="item.id">
            <div class="fields_item" :class="['fields_item'+(index+1)]">

              <circle-slider
                class="slider-circle__item"
                v-model="score[index]"
                :text="item.knowledge.title"
                :urlImg="item.knowledge.image"
                :side="190"
                :min="0"
                :max="balance"
                :step-size="1"
                :circle-width="10"
                circle-color="#E7E7E7"
                progress-color="#0560CE"
                knob-color="#0560CE"
                :knob-radius="14"
                :disable="true"
              ></circle-slider>

              <div class="fields_item_num" :style="scoreStyle">{{ score[index] }}</div>
              <div class="fields_item_img"><img :src="item.knowledge.id" alt=""/></div>
              <div class="fields_item_txt">
                <span class="icon-check"></span>
                <p>{{     knowledge_list[index].knowledge }}</p>
              </div>

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
      knowledge_list: [
        {
          knowledge: "Гуманитарные науки",
          image: ''
        },
        {
          knowledge: "Техныческие науки",
          image: ''
        },
        {
          knowledge: "Гуманитарные науки",
          image: ''
        },
        {
          knowledge: "Техныческие науки",
          image: ''
        }],
      knowledgeListStart: [],
      maxBal: 20,
      score:[0,0,0,0],
      scoreStyle: {
        left: '73px',
        top: '191px'
      },
      score2: 10,
      score3: 3,
      score4: 0,
    }
  },

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['profile', 'profile_knowledge']),

    balance () {
      return this.maxBal - this.score[0] - this.score[1] - this.score[2] - this.score[3]
    },
    balControler(){
      return this.balance<=0 ? true : false
    }

  },
  watch:{

    balance(val){
      if(val<0){
        let num = Math.abs(val)
        this.score.forEach((s,i)=>{
          if(s>0){
            num -=1
            let newNum = s - 1;
            if (newNum>=0){
              this.score[i] = newNum
            }
          }
          if(s==1 && i==0){
            this.score1 = {
              left: '45px',
              top: '187px'
            }
          }else if(s==2 && i==0){
            this.score1 = {
              left: '25px',
              top: '176px'
            }
          }
        })
        console.log(num)}
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
    //this.fetchProfile()
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
