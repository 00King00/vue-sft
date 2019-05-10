import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import Lang from 'vuejs-localization'
import VueCircleSlider from '@/components/ui/CircleSlider/index.js'
const VueScrollTo = require('vue-scrollto')
import '@/assets/scss/style.scss'
Vue.use(VueCircleSlider)
Vue.use(VueScrollTo, {
  offset: -90
})
Lang.requireAll(require.context('@/lang', true, /\.js$/))

// init modules
Vue.use(Lang, { default: 'ru' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
