import Vue from 'vue'
import App from './App'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
const vuetifyOptions = { }

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
