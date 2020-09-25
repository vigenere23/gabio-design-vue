import { RelativeUrlResolver } from '../src/lib/utils/url'

export const WEBPACK_RELATIVE_URL_RESOLVER: RelativeUrlResolver = (url) =>
  require(`@showcase/assets/` + url)

export const RELATIVE_URL_RESOLVER: RelativeUrlResolver = (url) =>
  `@showcase/assets/` + url
