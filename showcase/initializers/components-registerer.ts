import Vue from 'vue'

export class ComponentsRegisterer {
  register(): void {
    const componentFiles = require.context('../components', true, /.(vue|js)$/)

    componentFiles.keys().forEach((fileName) => {
      const componentConfig = componentFiles(fileName)

      const componentName = fileName
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, '')

      if (componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    })
  }
}
