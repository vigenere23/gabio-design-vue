export function resolveImageURL(url: string): string {
  const EXTERNAL_URL_PATTERN = /^https?:\/\//

  if (!url || EXTERNAL_URL_PATTERN.test(url)) {
    return url
  }

  return require(`@/assets/` + url)
}
