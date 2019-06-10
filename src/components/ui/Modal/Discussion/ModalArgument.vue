<template>
  <div class="win win-argument" id="win-argument">
    <div class="win_cont">
      <Argument/>
      <a href="#" class="win_close" @click.prevent="closeAllModal()"><span class="icon-cab7"></span></a>
    </div>
  </div>
</template>

<script>
import Argument from './Argument'
import {mapMutations} from 'vuex'
export default {
  name: 'ModalArgument',
  components:{Argument},
  methods: {
    ...mapMutations('modal', ['closeAllModal']),
  }
}
</script>
