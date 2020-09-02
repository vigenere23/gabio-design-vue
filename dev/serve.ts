import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import gio from '../src/entry'

Vue.config.productionTip = false;
Vue.use(gio)

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
