import { RelativeUrlResolver } from '../src/lib/utils/image'

export const RELATIVE_URL_RESOLVER: RelativeUrlResolver = (url) =>
  require(`@showcase/assets/` + url)
