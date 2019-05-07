<template>
  <div class="win win-argument" id="win-argument">
    <div class="win_cont">
      <form @submit.prevent="add">
        <div class="w_asp">
          <div class="w_thesis_title">Мои аспекты</div>
          <div class="aspect aspect-check">
            <item  v-for="item in favorite_aspects"
                   :key="item.id"
                   :id="item.id"
                   :title="item.title"
                   :url-img="item.image"
                    @selected="selectedAspects"/>
          </div>
        </div>
        <div class="w_pos">
          <div class="w_thesis_title">Моя позиция:</div>
          <div class="w_pos_links">
            <a href="#" class="w_pos_links_link w_pos_links_link1" @click="form.argument_position = 'yes'" :class="{'active': form.argument_position === 'yes'}">Да</a>
            <a href="#" class="w_pos_links_link w_pos_links_link2" @click="form.argument_position = 'no'" :class="{'active': form.argument_position === 'no'}">Нет</a>
          </div>
        </div>
        <div class="w_thesis">
          <div class="w_thesis_title">Ваш тезис</div>
          <textarea v-model="form.argument_description"></textarea >
        </div>
        <div class="w_thesis_linksblock">
          <div class="w_thesis_linksblock_ls">
            <a href="#" class="plus_link"><span class="icon-plus"></span></a>
            <a href="#" class="sh_link"><span class="icon-link2"></span></a>
          </div>
          <div class="w_thesis_title">Ссылки:</div>
          <div class="w_thesis_link_cont">
            <div class="w_thesis_link_line">
              <input type="text" class="t-inp" value="https://www.google.com.ua/webhp?hl=ru..." readonly/>
              <a href="#" class="w-close-link"><span class="icon-cab7"></span></a>
            </div>
            <div class="w_thesis_link_line">
              <input type="text" class="t-inp" value="https://www.google.com.ua/webhp?hl=ru..." readonly/>
              <a href="#" class="w-close-link"><span class="icon-cab7"></span></a>
            </div>
          </div>
          <div class="w_thesis_files">
            <div class="w_thesis_files_file">
              <span class="icon-doc1"></span>
              <a href="#" class="w-close-link"><span class="icon-cab7"></span></a>
              <span class="w_thesis_txt">Proof.pdf</span>
            </div>
            <div class="w_thesis_files_file">
              <span class="icon-doc1"></span>
              <a href="#" class="w-close-link"><span class="icon-cab7"></span></a>
              <span class="w_thesis_txt">Exzample.doc</span>
            </div>
          </div>
        </div>
        <div class="btn-holder">
          <input type="submit" class="btn btn-bot" value="Добавить"/>
        </div>

      </form>
    </div>
    <a href="#" class="win_close" @click="closeAllModal()"><span class="icon-cab7"></span></a>
  </div>
</template>

<script>
import item from './argumentItem'
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'Argument',

  components: { item },

  data () {
    return {
      form: {
        argument_position: 'yes',
        argument_description: '',
        argument_links: '',
        argument_file1: '',
        argument_file2: '',
        aspect_id: ''
      }
    }
  },

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['favorite_aspects'])
  },

  methods: {
    ...mapMutations('modal', ['closeAllModal']),
    ...mapActions('discussion', ['addDiscussionArguments']),
    ...mapActions('profile', ['getUserFavoriteAspects']),
    selectedAspects (aspectId) {
      if (!this.form.aspect_id.includes(aspectId)) {
        this.form.aspect_id = [...this.form.aspect_id, aspectId]
      } else {
        this.form.aspect_id = this.form.aspect_id.filter(id => id !== aspectId)
      }
    },
    add () {
      this.addDiscussionArguments({
        id: this.auth.id,
        data: this.form
      })
      this.closeAllModal()
    }
  },

  created () {
    if (this.favorite_aspects.length >= 0) this.getUserFavoriteAspects(this.auth.id)
  }
}
</script>

<style scoped>
.btn-holder {
  display: block;
  position: absolute;
  width: 140px;
  height: 34px;
  left: 50%;
  transform: translateX(-50%);
}
.btn-holder:before {
  content: '';
  display: block;
  width: calc(100% + 18px);
  height: 45px;
  border: 11px solid #fff;
  border-radius: 43px;
  margin-left: -8.5px;
  margin-top: -3px;
}

.btn-holder .btn-bot {
  bottom: 0;
  width: 100%;
}
</style>
