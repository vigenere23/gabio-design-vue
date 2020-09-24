import Vue, { VNode } from 'vue'
import App from './App.vue'
import router from './router'
import gio from '../src/vue/entry'
import { ComponentsRegisterer } from './initializers/components-registerer'
import { FontAwesomeRegisterer } from './initializers/font-awesome-registerer'

new ComponentsRegisterer().register()
new FontAwesomeRegisterer().register()

Vue.config.productionTip = false
Vue.use(gio, { autoRegister: false })

new Vue({
  router,
  render: (h): VNode => h(App)
}).$mount('#app')
