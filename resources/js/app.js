import Vue from 'vue'
import VueLoaders from 'vue-loaders'
import vpdp from 'vue-persian-datetime-picker'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import persianJS from '~/plugins/persian.min'
import persiandate from '~/plugins/persian-date.min'
import App from '~/components/App'
import '~/plugins'
import '~/components'
Vue.component('vpdp', vpdp)
Vue.config.productionTip = false
window.Vue = require('vue')
new Vue({
  i18n,
  store,
  router,
  ...App
})

Vue.use(
  persianJS,
  persiandate,
  VueLoaders,
  vpdp
)
