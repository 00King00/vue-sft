<template>
  <div class="disc_item">
    <div class="disc_line disc_line_header">
      <div class="disc_line_cont">
        <div class="disc_line_inf">
          <div class="disc_line_name"><a href="#">{{argument.title}}</a></div>
          <div class="disc_line_athor"><span>Автор:</span> {{argument.thesis.author.fullname}} </div>
          <div class="disc_line_date">{{argument.thesis.created_at}}</div>
        </div>
        <div class="truefalse"><span>{{argument.opinion_ratio.true}}%</span><span>{{argument.opinion_ratio.false}}%</span></div>
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
        <Comment :comment="argument.thesis"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment'
  export default {
    name: "Argument",
    props: ['argument',],
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
