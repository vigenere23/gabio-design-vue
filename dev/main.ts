import Vue, { VNode } from 'vue'
import App from './App.vue'
import gio from '../src/vue/entry'

Vue.config.productionTip = false
Vue.use(gio)

new Vue({
  render: (h): VNode => h(App)
}).$mount('#app')
