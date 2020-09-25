import _Vue from 'vue'
import { plugin } from '@/vue/initializers/plugin'
// TODO make components exportation possible
// import * as components from '@/vue/components'

// To bundle fonts and styles
import '@openfonts/sen_latin'
import 'typeface-roboto'
import 'typeface-fira-code'
import '@/lib/styles/reset.scss'

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
  let GlobalVue = null
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
  } else if (typeof global !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GlobalVue = (global as any).Vue
  }
  if (GlobalVue) {
    ;(GlobalVue as typeof _Vue).use(plugin)
  }
}
// Default export is library as a whole, registered via Vue.use()
// export const test = { ...components } // TODO make components exportation possible
export default plugin
