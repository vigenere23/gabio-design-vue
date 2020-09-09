import _Vue from 'vue'
import * as components from '@/vue/components'

export class ComponentsRegisterer {
  register(Vue: typeof _Vue): void {
    Object.entries(components).forEach(([componentName, component]) => {
      Vue.component(componentName, component)
    })
  }
}
