import CircleSlider from './components/CircleSlider.vue'

// Install the components
export function install (Vue) {
  Vue.component('circle-slider', CircleSlider)
  /* -- Add more components here -- */
}

// Expose the components
export {
  CircleSlider
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: 0.1,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
