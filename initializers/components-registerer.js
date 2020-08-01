import Vue from 'vue'

const COMPONENT_NAME_PREFIX = 'Gio'

export class ComponentsRegisterer {
  register () {
    const componentFiles = require.context(
      '../components',
      true,
      /.(vue|js)$/
    )

    componentFiles.keys().forEach(fileName => {
      const componentConfig = componentFiles(fileName)

      const componentName = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')

      Vue.component(
        COMPONENT_NAME_PREFIX + componentName,
        componentConfig.default || componentConfig
      )
    })
  }
}
