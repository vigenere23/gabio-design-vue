import _Vue from 'vue'
import * as components from '@/components'

const COMPONENT_NAME_PREFIX = 'Gio'

export class ComponentsRegisterer {
  register(Vue: typeof _Vue) {
    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(COMPONENT_NAME_PREFIX + componentName, component)
    })
  }
}
