<template>
  <div class="win win-ed" id="win-ed">
    <div class="win_cont">
      <div class="win_title m-show">Добавить свой вариант аспекта</div>
      <form @submit.prevent="add()">
        <div class="win-ed_left">
          <div class="add_file">
            <div class="jq-file file-link">
              <div class="jq-file__name"><span class="icon-link2"></span>Прикрепить файл</div>
              <div class="jq-file__browse"><span class="icon-link"></span></div>
              <input type="file" class="file-link" value="Прикрепить файл" @change="uploadImage">
            </div>
          </div>
        </div>
        <div class="win-ed_right">
          <div class="win-ed_title m-hid">Добавить свой вариант аспекта:</div>
          <div class="form_row"><input v-model="title" type="text" class="t-inp" value=""/></div>
          <div class="form_btn"><input type="submit" class="btn" value="Добавить"/></div>
        </div>
      </form>
    </div>
    <a href="#" class="win_close" @click.prevent="closeAllModal()"><span class="icon-cab7"></span></a>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "DiscussionAddAspects",
    data() {
      return {
        title: '',
        image: false,
      }
    },
    methods: {
      ...mapMutations('modal', ['closeAllModal']),
      ...mapMutations('profile', ['addCustomAspect']),

      uploadImage (e) {
        if (e.target.files === 0 || e.target.files > 1) return
        this.image = e.target.files[0]
      },

      add (){
        if (!this.image) {
          return alert('Please select aspect image!')
        }

        this.addCustomAspect({
          title: this.title,
          image: this.image
        })

        this.closeAllModal()
      }
    },
  }
</script>

<style scoped>

</style>
