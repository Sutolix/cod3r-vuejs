import Vue from 'vue'
import App from './App.vue'
import Counter from './Counters.vue'

Vue.config.productionTip = false
Vue.component('app-counters', Counter)

new Vue({
  render: h => h(App),
}).$mount('#app')
