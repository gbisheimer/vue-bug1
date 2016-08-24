import Vue from 'vue/dist/vue.js'
import App from './App'

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: 'div#main_content',
  components: {
    App
  }
})
