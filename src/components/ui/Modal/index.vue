<template>
  <div>
    <div class="overlay" :class="{ open: modals.length }"></div>

    <MainLogin v-if="activeModal && activeModal.name === 'Login'" :modal="activeModal" />
    <MainRegister v-if="activeModal && activeModal.name === 'Register'" :modal="activeModal" />
    <MainForgotPassword v-if="activeModal && activeModal.name === 'ForgotPassword'" :modal="activeModal" />
    <RewardsInfo v-if="activeModal && activeModal.name === 'RewardsInfo'" :modal="activeModal" />
    <DiscussionAdd v-if="activeModal && activeModal.name === 'DiscussionAdd'" :modal="activeModal" />
    <DiscussionArgument v-if="activeModal && activeModal.name === 'DiscussionArgument'" :modal="activeModal" />
    <DiscussionComplaints v-if="activeModal && activeModal.name === 'DiscussionComplaints'" :modal="activeModal" />
    <DiscussionGraph v-if="activeModal && activeModal.name === 'DiscussionGraph'" :modal="activeModal" />
    <Chart v-if="activeModal && activeModal.name === 'Chart'" :modal="activeModal" />
  </div>
</template>

<script>
  import MainLogin from './Main/Login'
  import MainRegister from './Main/Register'
  import MainForgotPassword from './Main/ForgotPassword'

  import RewardsInfo from './Rewards/Info'

  import DiscussionAdd from './Discussion/Add'
  import Chart from './Chart/Main'
  import DiscussionArgument from './Discussion/Argument'
  import DiscussionComplaints from './Discussion/Complaints'
  import DiscussionGraph from './Discussion/Graph'

  import { mapState } from 'vuex'

  export default {
    name: "Modal",

    components: {
      MainLogin,
      MainRegister,
      MainForgotPassword,
      Chart,
      RewardsInfo,
      DiscussionAdd,
      DiscussionArgument,
      DiscussionComplaints,
      DiscussionGraph,
    },

    computed: {
      ...mapState('modal', ['modals']),

      activeModal () {
        if(this.modals.length) {
          return this.modals[this.modals.length - 1]
        }
        return false
      }
    }
  }
</script>

<style scoped>

</style>
