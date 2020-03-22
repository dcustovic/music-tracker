import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import VueYouTubeEmbed from 'vue-youtube-embed'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/components/global/Panel'
const vuetifyOptions = { }

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
