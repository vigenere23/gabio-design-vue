import _Vue from 'vue'
import * as components from '@/vue/components'

const COMPONENT_NAME_PREFIX = 'Gio'

export class ComponentsRegisterer {
  register(Vue: typeof _Vue): void {
    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(COMPONENT_NAME_PREFIX + componentName, component)
    })
  }
}
