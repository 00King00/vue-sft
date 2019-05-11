<template>
  <div class="center">
    <section class="section-form">
      <div class="h2 m-hid"><h1>{{$lang.profile.setTitle}}</h1></div>
      <div class="LK_block">
        <div class="LK_avatar">
          <div class="add_file">
            <div class="jq-file file-link">
              <div class="jq-file__name"><span class="icon-link2"></span>{{$lang.profile.addFile}}</div>
              <div class="jq-file__browse"><span class="icon-link"></span></div>
              <input type="file" class="file-link" value="$lang.profile.addFile" @change="changeAvatar">
            </div>
            <div class="LK_avatar_txt">{{$lang.profile.addAvatar}}</div>
          </div>
        </div>
        <div class="LK_form_block form_block">
          <div class="form_block_title block_title"><span class="icon-cab6"></span>{{$lang.profile.changPass}}</div>
          <div class="LK_form">
            <form @submit.prevent="changePassword">
              <div class="form_row">
                <label>{{$lang.profile.oldPass}}:</label>
                <div class="form_el">
                  <input type="password" class="t-inp" placeholder="********" v-model="old_password" required>
                  <!-- <a href="#" class="look_link"><span class="icon-eye"></span></a> -->
                </div>
              </div>
              <div class="form_row">
                <label>{{$lang.profile.newPass}}:</label>
                <div class="form_el">
                  <input type="password" class="t-inp" placeholder="********" v-model="new_password" required>
                  <!-- <a href="#" class="look_link"><span class="icon-eye"></span></a> -->
                </div>
              </div>
              <div class="form_row">
                <label>{{$lang.profile.reNewPass}}:</label>
                <div class="form_el">
                  <input type="password" class="t-inp" placeholder="********" v-model="re_new_password" required>
                  <!-- <a href="#" class="look_link"><span class="icon-eye"></span></a> -->
                </div>
              </div>
              <div class="form_btn"> <input type="submit" class="btn" :value="$lang.profile.changePassBut"/></div>
            </form>
          </div>
        </div>
      </div>
      <div class="LK_form_block form_block">
        <div class="form_block_title block_title"><span class="icon-mail2"></span>{{$lang.profile.changeEmail}}</div>
        <div class="LK_form">
          <form @submit.prevent="changeEmail">
            <div class="form_cols">
              <div class="form_cols_item">
                <div class="form_row">
                  <label>{{$lang.profile.oldEmail}}</label>
                  <div class="form_el">
                    <input v-model="old_email" type="text" class="t-inp" required>
                  </div>
                </div>
              </div>
              <div class="form_cols_item">
                <div class="form_row">
                  <label>{{$lang.profile.newEmail}}</label>
                  <div class="form_el">
                    <input v-model="new_email" type="text" class="t-inp" required>
                  </div>
                </div>
              </div>
            </div>
            <div class="form_btn"> <input type="submit" class="btn" :value="$lang.profile.changeEmailBut"/></div>
          </form>
        </div>
      </div>
    </section>
    <button type="button" name="button" @click="test">test</button>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Settings",
  data() {
    return {
      old_email: '',
      new_email: '',
      old_password: '',
      new_password: '',
      re_new_password: '',
    }
  },

  computed: {
    ...mapState('auth', ['auth'])
  },

  methods: {
    ...mapActions('profile', ['EditPassword', 'EditEmail','ChangeAvatar']),
    test(){
      console.log("test")
      this.$axios.get('http://37.252.1.151:5000/api/public/profiles/current').then(res => console.log(res))
    },

    changeEmail () {
      this.EditEmail({
        new_email: this.new_email,
      })
        .then(response => {
          console.log(response);
          if (response.status !== 200) return;
          alert('Success!')
        })
    },

    changePassword () {
      if (this.new_password !== this.re_new_password) return alert('Пароли не идеинтичны')

      this.EditPassword({
        old_password: this.old_password,
        new_password: this.new_password,
      })
        .then(response => {
          console.log(response);
          if (response.status !== 200){
            alert('Что то пошло не так...')
            } else
              { alert('Success!')}
        })
    },

    changeAvatar (e) {
      let avatar = e.target.files[0]

      this.ChangeAvatar({
        profile_id: this.auth.id,
        avatar,
      })
        .then(response => {
          console.log(response);
          if (response.status !== 200) return;
          alert('Avatar successfully changed')
        })
    }
  }
}
</script>

<style scoped>

</style>
