import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { VueHammer } from 'vue2-hammer'

Vue.config.productionTip = false
Vue.use(VueHammer)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
