import _Vue from 'vue'
import Prism from 'vue-prism-component'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markdown'

export class PrismRegisterer {
  register(Vue: typeof _Vue) {
    Vue.component('prism', Prism)
  }
}
