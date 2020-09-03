import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faCode,
  faEnvelope,
  faPaintBrush,
  faHome,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedinIn,
  faBehance
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export class FontAwesomeRegisterer {
  register(): void {
    library.add(
      faArrowLeft,
      faCode,
      faGithub,
      faLinkedinIn,
      faBehance,
      faEnvelope,
      faPaintBrush,
      faHome,
      faExternalLinkAlt
    )
    Vue.component('fa-icon', FontAwesomeIcon)
  }
}
