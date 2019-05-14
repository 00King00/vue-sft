<template>
  <header class="header">
    <a href="#" @click.prevent="openMenu(!menu)" class="mobile-button" :class="{'open': menu}"><span></span></a>
    <div class="header_top">
      <div class="wrapper">
        <div class="header_logo">
          <router-link to="/">
            <img src="@/assets/img/logo.png" alt=""/>
          </router-link>
        </div>
        <div class="header_link header_lang m-hid">
          <a href="#" class="header_lang_selected">{{activeLang}}</a>
          <ul class="header_lang_list">
            <li v-for="lang in langs" v-show="lang.name !== activeLang" :key="lang.name"><a href="#" @click.prevent="changeLang(lang)">{{lang.name}}</a></li>
          </ul>
        </div>
        <div class="header_link header_search_opener m-show">
          <a href="#">
            <span class="icon-search"></span>
            <div class="header_link_txt">Поиск</div>
          </a>
        </div>
        <div class="header_link header_arch">
          <router-link to="/archive" href="#">
            <span class="icon-arch"></span>
            <div class="header_link_txt">{{$lang.header.archive}}</div>
          </router-link>
        </div>
        <nav class="header_nav">
          <ul>
            <li>
              <a href="#">
                <span class="icon-ico8"></span>
                <div class="header_link_txt">{{$lang.header.aspects}}</div>
              </a>
            </li>
            <li :class="{'disabled': !auth.id}">
              <router-link to="/profile/favorites">
                <span class="icon-fav"></span>
                <div class="header_link_txt">{{$lang.header.favorites}}</div>
              </router-link>
            </li>
           <!-- <li :class="{'disabled': !token}">
              <a href="#">
                <span class="icon-mail"></span>
                <div class="header_link_txt">{{$lang.header.messages}}</div>
              </a>
            </li>-->
            <li v-if="!auth.id">
              <a href="#" @click.prevent="openLoginModal()">
                <span class="icon-user"></span>
                <div class="header_link_txt">{{$lang.header.login}}</div>
              </a>
            </li>
            <li v-else>
              <router-link :to="'/profile/' + auth.id" href="#">
                <span class="icon-user"></span>
                <div class="header_link_txt">Профиль</div>
              </router-link>
            </li>
          </ul>
          <div class="header_nav_circ">
            <span class="circ_grad"><span class="icon-reload"></span></span>
          </div>
        </nav>
        <div class="header_search m-hid">
          <div class="header_search_wr">
            <input type="text" :placeholder="$lang.header.searchPlaceHolder" class="t-inp">
            <button class="search-btn"><span class="icon-search"></span></button>
          </div>
        </div>
      </div>
    </div>
    <aside class="mob-side" :class="{'open' : menu}">
      <div class="mob-side_top">
        <div class="header_logo">
          <router-link to="/">
            <img src="@/assets/img/logo.png" alt=""/>
            <span>Search For Truth</span>
          </router-link>
        </div>
      </div>
      <div class="mob-side_cont">
        <div class="mob-side_btns">
          <div class="mob-side_add"><a href="#" class=""><span class="circ_grad"><span class="icon-plus"></span></span></a></div>
          <a href="#" class="btn btn-bord" @click="openModal">Войти</a>
        </div>
        <ul class="mob-side_nav sidebar-themes_list">
          <li><router-link to="/"><span class="icon-arrow_down"></span>Тема дня</router-link></li>
          <li><router-link to="/"><span class="icon-arrow_down"></span>Топ тем дискуссий</router-link></li>
          <li><router-link to="/"><span class="icon-arrow_down"></span>Топ авторов</router-link></li>
          <li><router-link to="/"><span class="icon-arrow_down"></span>О проекте</router-link></li>
          <li><router-link to="/"><span class="icon-arrow_down"></span>Архив тем дискуссий</router-link></li>
          <li><router-link to="/"><span class="icon-arrow_down"></span>Обратная связь</router-link></li>
          <li class="li-prof"><a href="#"><span class="icon-user"></span>Мой профиль</a></li>
        </ul>
        <div class="mob-side_lang">
          <a href="#" class="lang_link">Рус</a> / <a href="#" class="lang_link ative">Eng</a> / <a href="#" class="lang_link">Deu</a>
        </div>
        <div class="soc mob-side_soc">
          <a href="#" class="soc_link"><span class="icon-fb"></span></a>
          <a href="#" class="soc_link"><span class="icon-inst"></span></a>
          <a href="#" class="soc_link"><span class="icon-vk"></span></a>
          <a href="#" class="soc_link"><span class="icon-tw"></span></a>
          <a href="#" class="soc_link"><span class="icon-youtube"></span></a>
        </div>
        <a href="#" class="mob-side_link">Политика конфиденциальности</a>
      </div>
      <div class="mob-side_right">
        <div class="mob-side_bg"><a href="#" @click.prevent="openMenu(false)" class="mob-side_close"><span class="icon-arrow_down"></span></a></div>
      </div>
    </aside>
    <div class="header_overlay" :class="{'openSide': menu}"></div>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      langs: [
        {
          key: 'ru',
          name: 'Рус'
        }, {
          key: 'en',
          name: 'Eng'
        }, {
          key: 'de',
          name: 'Deu'
        }
      ],
      activeLang: 'Рус'
    }
  },

  computed: {
    ...mapState(['menu']),
    ...mapState('auth', ['auth'])
  },

  methods: {
    ...mapActions('modal', ['openLoginModal']),
    ...mapMutations(['openMenu']),

    openModal () {
      this.openLoginModal()
    },

    changeLang (lang) {
      this.activeLang = lang.name
      this.$lang.setLang(lang.key)
    }
  }
}
</script>

<style >

</style>
