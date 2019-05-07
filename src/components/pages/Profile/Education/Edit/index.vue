<template>
  <div class="center">
    <section class="section-form">
      <div class="h2 m-hid"><h1>Образование</h1></div>
      <div class="ed_block" v-if="education">
        <div class="form_block_title block_title m-show"><span class="icon-cab1"></span>Образование</div>
        <form @submit.prevent="submitEducation">
          <div class="ed_block_cols">
            <div class="ed_block_left">
              <div class="form_block LK_form_block">
                <button type="submit" class="btn btn-bord-blue">Сохранить</button>
                <div class="form_row">
                  <label>Страна:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.country">
                  </div>
                </div>
                <div class="form_row">
                  <label>Город:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.city">
                  </div>
                </div>
                <div class="form_row">
                  <label>ВУЗ:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.hight_school">
                  </div>
                </div>
                <div class="form_row">
                  <label>Дата:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.date">
                  </div>
                </div>
                <div class="form_row">
                  <label>Факультет:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.faculty">
                  </div>
                </div>
                <div class="form_row">
                  <label>Специальность:</label>
                  <div class="form_el">
                    <input type="text" class="t-inp" v-model="education.specialty">
                  </div>
                </div>
              </div>
            </div>
            <div class="ed_block_right">
              <div class="card_verif">Подтвердить данные:</div>
              <div class="add_file">
                <div class="jq-file file-link">
                  <div class="jq-file__name"><span class="icon-link2"></span>Прикрепить файл</div>
                  <div class="jq-file__browse"><span class="icon-link"></span></div>
                  <input type="file" class="file-link" value="Прикрепить файл" @change="uploadScan">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "EducationMain",

  data () {
    return {
      education: false
    }
  },

  computed: {
    ...mapState('auth', ['auth']),
  },

  methods: {
    ...mapActions('profile', ['getUserEducation', 'editUserEducation']),

    submitEducation () {
      if (typeof this.education.scan === 'string') {
        alert(1)
        delete this.education.scan
      }

      this.editUserEducation({ ...this.education, id: this.auth.id })
    },

    uploadScan (e) {
      console.log(e.target.files[0])
      this.education.scan = e.target.files[0]
    }
  },

  mounted () {
    this.getUserEducation()
      .then(response => {
        this.education = response.data.result
      })
  }
}
</script>

<style scoped>

</style>
