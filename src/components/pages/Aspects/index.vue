<template>
  <div class="center">
    <div class="h2 mb-5"><h1>Добавить аспекты в избранное</h1></div>
      <div class="aspect aspect-fav" >
        <Item v-for="item in all_aspects" :key="item.id" :item="item" @toggle1="Update"/>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Item from './Item'
export default {
  name: 'Aspects',
  data: ()=>({
  }),
  components:{Item},
  computed: {
    ...mapState('profile', ['all_aspects']),
    ...mapState('auth', ['auth']),
  },

  methods: {
    ...mapActions('profile', ['GetAllAspects']),
    Update(payload){
      this.all_aspects.find((asp, i) =>{

        if(asp.id == payload.id) this.$store.commit('profile/UpdateAspects', {i, payload})
      })


    }

  },

  mounted () {
    this.GetAllAspects().catch(err => alert(err.message))
  }
}
</script>

<style>

</style>
