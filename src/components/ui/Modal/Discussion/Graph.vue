<template>
  <div class="win win-schedule" id="win-schedule">
    <div class="win_cont">
      <div class="schedule_block">
        <div class="schedule_block_in" ref="box"><div class="schedule_block_c" @mousedown="setScale" ref="ball"></div></div>
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
  name: "Graph",
  data(){
    return{

    }
  },
  methods:{
    getCoords(elem) {
      let box = elem.getBoundingClientRect();
      console.log(box)
      return {
        top: box.top,
        left: box.left
      };
    },
    // getCoords(el){
    //   //let box = elem.getBoundingClientRect();
    //     return {
    //       top: el.top,
    //       left: el.left
    //     };
    // },
    setScale(e){
      let ball = this.$refs.ball;
      let box = this.$refs.box;
      let coordsBox = this.getCoords(box);
      let coordsBall = this.getCoords(ball);
      let shiftX = coordsBox.left+21.5;
      let shiftY = coordsBox.top+21.5;
      console.log(shiftX)
      console.log(shiftY)
      //ball.style.position = 'absolute';
      //document.body.appendChild(ball);
      box.appendChild(ball);

      function moveAt(e) {
        ball.style.left = e.clientX - shiftX + 'px';
        ball.style.top = e.clientY - shiftY + 'px';

      }

      moveAt(e);
      //ball.style.zIndex = 1000; // над другими элементами

      document.onmousemove = function(e) {
        moveAt(e);
      }

      ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
      }
    ////
      ball.ondragstart = function() {
        return false;
      };
    }
  }
}
</script>

<style scoped>
  .schedule_block_c{
    margin: 0;
    left: 44%;
    top: 43%;
  }
</style>
