import { PluginFunction } from 'vue'
import { ComponentsRegisterer } from '@/vue/initializers/components-registerer'
import { PrismRegisterer } from '@/vue/initializers/prism-registerer'

interface PluginOptions {
  autoRegister?: boolean
  modules?: {
    prism?: true
  }
}

const DEFAULT_OPTIONS: PluginOptions = {
  autoRegister: true,
  modules: {
    prism: true
  }
}

// Define typescript interfaces for autoinstaller
interface InstallFunction extends PluginFunction<PluginOptions> {
  installed?: boolean
}

// install function executed by Vue.use()
const install: InstallFunction = function installGio(Vue, options) {
  if (install.installed) return
  install.installed = true

  options = { ...DEFAULT_OPTIONS, ...options }

  if (options.autoRegister) {
    new ComponentsRegisterer().register(Vue)
  }

  if (options.modules) {
    const modulesOptions = options.modules

    if (modulesOptions.prism) {
      new PrismRegisterer().register(Vue)
    }
  }
}

// Create module definition for Vue.use()
export const plugin = {
  install
}
