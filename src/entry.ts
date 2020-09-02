import _Vue, { PluginFunction } from 'vue'
import { ComponentsRegisterer } from '@/initializers/components-registerer'
import { PrismRegisterer } from '@/initializers/prism-registerer'
import './styles/reset.scss'

// Define typescript interfaces for autoinstaller
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean
}

// install function executed by Vue.use()
const install: InstallFunction = function installGio(Vue: typeof _Vue) {
  if (install.installed) return
  install.installed = true

  new ComponentsRegisterer().register(Vue)
  new PrismRegisterer().register(Vue)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

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
export default plugin
