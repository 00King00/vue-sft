<template>
    <div class="disc_line">
        <div class="disc_line_img">
          <img :src="discussion.image" :alt="discussion.title"/>
        </div>
        <div class="disc_line_cont">
            <div class="disc_line_inf">
                <div class="disc_line_name"><a href="#">{{discussion.title}}</a>
                </div>
                <div class="disc_line_athor"><span>Автор:</span> {{discussion.author}}</div>
                <div class="disc_line_date">{{date}}</div>
            </div>
            <div class="truefalse"><span>80%</span><span>20%</span></div>
            <a href="#" class="fav_link active"
               @click.prevent="deleteDiscussion">
              <span class="icon-fav2"></span>
            </a>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'discussionItem',
  props: ['discussion'],
  computed: {
    ...mapState('auth', ['auth']),
    date () {
      return new Date(this.discussion.date).toLocaleDateString()
    }
  },
  methods: {
    ...mapActions('profile', ['deleteFavoritesDiscussion']),
    deleteDiscussion () {
      this.deleteFavoritesDiscussion({ id: this.auth.id, object_id: this.discussion.id })
    }
  }
}

</script>
