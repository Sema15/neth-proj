import Vue from 'vue'
import store from './store'
import VModal from 'vue-js-modal'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true, height: 'auto'} })
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
