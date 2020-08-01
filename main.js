import { ComponentsRegisterer } from './initializers/components-registerer'
import { PrismRegisterer } from './initializers/prism-registerer'

import './styles/reset.scss'

new ComponentsRegisterer().register()
new PrismRegisterer().register()
