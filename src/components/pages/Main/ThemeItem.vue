<template>
  <div class="posts_item" @click.prevent="cardEvent">
    <div class="posts_item_img">
        <img v-if="item.image_url" :src="$baseUrl + item.image_url" alt="foto"/>
      <div class="truefalse"><span>{{ item.votes.true }}%</span><span>{{ item.votes.false }}%</span></div>
    </div>
    <div class="posts_item_cont">
      <div class="posts_item_title">{{ item.title }}</div>
      <div class="posts_item_bot">
        <div class="posts_item_author">{{$lang.main.authorWrap}}: <b>{{ item.author.fullname }}</b></div>
        <a href="#" v-if="$store.state.auth.auth.id !== null" :class="{'active': item.is_favorite}" class="fav_link"><span class="icon-fav"></span></a>
        <v-icon v-if="permission && !item.is_frozen" :color="is_frozen" >lock_open</v-icon>
        <v-icon v-if="item.is_frozen" >lock</v-icon>
        <div class="posts_item_date">{{item.created_at}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'ThemeItem',
  props: ['item', 'eventModel'],
  computed:{
    ...mapState('auth', ['permission']),
    is_frozen(){
      return this.item.is_frozen ? 'red' : ''
    },
  },
  methods: {
    cardEvent($event){
      //console.log($event.target.classList[0] == "v-icon");
      //return;
      if($event.target.classList[0] == "v-icon"){
        this.$emit("freeze-toggle", this.item.id)
        //this.$store.dispatch('discussion/ToggleDiscusionFreeze').then(res=>console.log(res))
        return;
      }

      if($event.target.className == "icon-fav"){
        if(this.eventModel){
            this.$emit("fav-toggle", this.item.id)
        }else{
          this.$store.dispatch('discussion/toggleDiscusionFav',this.item.id).then(disc =>{
            this.$store.commit('discussion/replaceDiscussionTop', {id : disc.id, is_favorite: disc.is_favorite})
          })
        }
      }else {
        this.$router.push('/discussion/' + this.item.id)
      }
    }
  },
}
</script>

<style scoped>
.v-icon{
  float: right;
  margin-top: -10px;
  cursor: pointer;
}
.v-icon:hover{
  color:#FF441D;
}
</style>
