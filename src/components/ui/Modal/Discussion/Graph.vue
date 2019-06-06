<template>
  <div class="win win-schedule" id="win-schedule">
    <div class="win_cont">
      <div class="schedule_block">
        <div class="schedule_block_in"><div class="schedule_block_c"></div></div>
        <div class="schedule_txt">Достоверность</div>
        <div class="schedule_txt2">Убедительность</div>
        <div class="schedule_n schedule_n0">0</div>
        <div class="schedule_n schedule_n5">5</div>
        <div class="schedule_n schedule_n10">10</div>
        <div class="schedule_n schedule_n52">5</div>
        <div class="schedule_n schedule_n102">10</div>
      </div>

      <div class="schedule_block_bottom">
        <div class="schedule_left">
          <div class="schedule_rline">Рейтинг убедительности: <span>5</span> </div>
          <div class="schedule_rline">Рейтинг достоверности: <span>2</span> </div>
        </div>
        <div class="schedule_right">
          <a href="#" class="btn">Подтвердить</a>
        </div>
      </div>
    </div>
    <a href="#" class="win_close" @click.prevent="$store.commit('modal/closeAllModal')" ><span class="icon-cab7"></span></a>
  </div>
</template>

<script>
    export default {
        name: "Graph"
    }
</script>

<style scoped>

</style>
