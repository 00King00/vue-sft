<template>
  <div class="center">
    <section class="section_task">
      <div class="h2"><h1>{{$lang.descAdd.title}}</h1></div>
      <div class="edu_block_content">
        <a href="#" class="btn btn-bord-red c_link" @click="cansel">{{$lang.descAdd.cancel}}</a>
        <div class="edu_block current">
          <div class="edu_number"><span>1</span></div>
          <div class="edu_block_wrap">
            <div class="w_v">
              <div class="w_thesis_title">{{$lang.descAdd.themeTitle}}</div>
              <div class="w_v_inp">
                <input type="text" class="t-inp" v-model="form.title" :placeholder="$lang.descAdd.themeTitle"/>
                <!-- <span class="check_span"></span> -->
              </div>
            </div>
            <div class="edu-inp-wrap">
              <div class="w_thesis_title">Добавить изображение:</div>
              <div class="edu-inp-cont" style="text-align: center;">
                <span class="icon-link2 edu-inp-icon"></span>
                <input type="file" name="cover" @change="uploadCover" value="Выбрать" />
              </div>
            </div>
          </div>
        </div>
        <div class="edu_block">
          <div class="edu_number"><span>2</span></div>
          <div class="edu_block_wrap">
            <div class="w_asp country_wr">
              <div class="w_thesis_title">{{$lang.descAdd.select}}</div>
              <div class="aspect aspect-check">

                <Item
                  v-for="(item, index) in favorite_aspects"
                  :key="item.title"
                  :item="item"
                  :active="index === active_aspect"
                  @click.native="setActiveAspect(index)"
                  />

                <div class="aspect_item aspect_item_plus">
                  <a href="#" @click.prevent="addModal({name: 'DiscussionAddAspects'})">
                    <div class="aspect_item_add"><span class="icon-plus"></span><span>{{$lang.descAdd.add}}</span></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="edu_block">
          <div class="edu_number"><span>3</span></div>
          <div class="edu_block_wrap">
            <div class="w_thesis">
              <div class="w_thesis_title">{{$lang.descAdd.arg}}</div>
              <textarea v-model="form.argument" :placeholder="$lang.descAdd.arg"></textarea>
            </div>
            <div class="w_thesis_linksblock">
              <input type="file" style="display: none;" ref="files" multiple="multiple" name="files" @change="selectFiles">
              <div class="w_thesis_linksblock_ls">
                <a href="#" class="plus_link" @click.prevent="addFiles()" title="Add files"><span class="icon-plus"></span></a>
                <a href="#" class="sh_link" @click.prevent="addLink()" title="Add links"><span class="icon-link2"></span></a>
              </div>
              <div class="w_thesis_title" v-show="form.links.length">{{$lang.descAdd.links}}</div>
              <div class="w_thesis_link_cont">
                <div
                  class="w_thesis_link_line"
                  v-for="(link, index) in form.links"
                  :key="index"
                  >
                  <input type="text" class="t-inp" :value="link" readonly/>
                  <a href="#" class="w-close-link" @click.prevent="removeLink(index)"><span class="icon-cab7"></span></a>
                </div>
              </div>
              <div class="w_thesis_title" v-show="form.files.length">Files:</div>
              <div class="w_thesis_files">
                <div class="w_thesis_files_file" v-for="(file, index) in form.files" :key="`file_${index}`">
                  <span class="icon-doc1"></span>
                  <a href="#" class="w-close-link" @click.prevent="removeFile(`file_${index}`)"><span class="icon-cab7"></span></a>
                  <span class="w_thesis_txt">{{ file.name }}</span>
                </div>
              </div>
            </div>
            <div class="win_pos">
              <div class="w_thesis_title">{{$lang.descAdd.position}}</div>
              <div class="w_pos_links">
                <a href="#" :class="{'active': form.position === 1}" @click.prevent="form.position = 1" class="w_pos_links_link w_pos_links_link1">{{$lang.descAdd.yes}}</a>
                <a href="#" :class="{'active': form.position === 0}" @click.prevent="form.position = 0" class="w_pos_links_link w_pos_links_link2">{{$lang.descAdd.no}}</a>
              </div>
            </div>
            <input @click.prevent="sendForm" type="submit" class="btn btn-bot" :value="$lang.descAdd.publish"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Item from './Item'

export default {
  name: 'Discussion',

  data () {
    return {
      form: {
        title: '',
        cover: false,
        position: '',
        aspect: {},
        argument: '',
        links: [],
        files: []
      },
      active_aspect: false
    }
  },

  components: { Item },

  mounted () {
    this.getUserFavoriteAspects(this.auth.id)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('discussion/toggleDiscussionButton', true)
    next()
  },

  computed: {
    ...mapState('auth', ['auth']),
    ...mapState('profile', ['favorite_aspects'])
  },

  methods: {
    ...mapActions('modal', ['addModal']),
    ...mapActions('profile', ['getUserFavoriteAspects']),
    ...mapActions('discussion', ['createNewDiscussion']),
    cansel(){
      this.$router.go(-1)
    },
    sendForm () {
      this.form.lang = this.$lang.current_lang
      this.createNewDiscussion(this.form)
        .then(() => alert('Success!'))
    },

    removeLink (index) {
      this.form.links.splice(index, 1)
    },

    addLink () {
      let link = prompt('Enter link')
      if (link.length > 0) {
        this.form.links.push(link)
      }
    },

    addFiles () {
      this.$refs.files.click()
    },
    removeFile(key) {
    this.form.files.splice(key, 1)
    },

    selectFiles (e) {
      if(this.form.files.length <= 1 && e.target.files.length == 1){
        this.form.files.push(e.target.files[0])
      }else{
        let files = e.target.files;
        let filesArray = [];
        for (let i = 0; i < files.length; i++) {
            filesArray[i] = files.item(i);
        }
        console.log(filesArray)
        if (filesArray.length > 2) {
          alert('Max 2 files')
          console.log(filesArray)
          this.form.files = filesArray.splice(1)
        }else{
          this.form.files = filesArray
        }
      }
    },

    uploadCover (e) {
      if (e.target.files.length > 0) { this.form.cover = e.target.files[0] }
    },

    setActiveAspect (index) {
      this.active_aspect = index
      this.form.aspect = this.favorite_aspects[index]
    }
  }
}
</script>

<style scoped>

</style>
