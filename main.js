import { ComponentsRegisterer } from './initializers/components-registerer'
import { PrismRegisterer } from './initializers/prism-registerer'

new ComponentsRegisterer().register()
new PrismRegisterer().register()
