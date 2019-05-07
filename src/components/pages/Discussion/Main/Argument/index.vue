<template>
  <div class="disc_item">
    <div class="disc_line disc_line_header">
      <div class="disc_line_cont">
        <div class="disc_line_inf">
          <div class="disc_line_name"><a href="#">{{item.title}}</a></div>
          <div class="disc_line_athor"><span>Автор:</span> Бобель </div>
          <div class="disc_line_date">19.07.2018 </div>
        </div>
        <div class="truefalse"><span>80%</span><span>20%</span></div>
        <a href="#" @click.prevent="show = !show" class="disc_line_opener"><span class="icon-arrow_down"></span></a>
      </div>
    </div>
    <div class="disc_line_body" :class="{'show': show}">
      <div class="country_title">Выберите аспект:</div>
      <div class="disc_left_bg">
        <b>Дополнение</b>
      </div>
      <div class="disc_right_bg">
        <b>Опровержение:</b>
      </div>
      <div class="comm">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment'
  export default {
    name: "Argument",
    props: ['item'],
    data() {
      return {
        show: false
      }
    },
    components: { Comment }
  }
</script>

<style scoped>
.show{
  display: block !important;
}
</style>
