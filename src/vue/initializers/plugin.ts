import { PluginFunction, VueConstructor } from 'vue'

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
    registerComponents(Vue)
  }

  if (options.modules) {
    const modulesOptions = options.modules

    if (modulesOptions.prism) {
      registerPrism(Vue)
    }
  }
}

async function registerComponents(Vue: VueConstructor<Vue>): Promise<void> {
  const module = await import(`@/vue/initializers/components-registerer`)
  new module.ComponentsRegisterer().register(Vue)
}

async function registerPrism(Vue: VueConstructor<Vue>): Promise<void> {
  const module = await import(`@/vue/initializers/prism-registerer`)
  new module.PrismRegisterer().register(Vue)
}

// Create module definition for Vue.use()
export const plugin = {
  install
}
