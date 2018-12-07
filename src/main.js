import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import BootstrapVue from 'bootstrap-vue'
import responsive from 'vue-responsive'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(responsive);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
