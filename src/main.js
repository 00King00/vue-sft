import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store/store.js'
import Lang from 'vuejs-localization'
import VueCircleSlider from '@/components/ui/CircleSlider/index.js'
const VueScrollTo = require('vue-scrollto')
import '@/assets/scss/style.scss'
//import 'vuetify/lib/src/stylus/components/_app.styl'
//import 'vuetify/lib/src/stylus/components/_progress-circular.styl'
import 'vuetify/src/stylus/app.styl'
import Vuetify, {
	VApp, // required
  VProgressCircular
} from 'vuetify/lib'
Vue.use(Vuetify, {
  components: {
    VApp,
    VProgressCircular
  }
})
Vue.use(VueCircleSlider)
Vue.use(VueScrollTo, {
  offset: -90
})
Lang.requireAll(require.context('@/lang', true, /\.js$/))

// init modules
Vue.use(Lang, { default: 'ru' })
const baseURL = 'http://37.252.1.151:5000/api/public';
Vue.prototype.$axios = axios.create({ baseURL, withCredentials: true })
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
