export type RelativeUrlResolver = (relativeUrl: string) => string

export function resolveImageURL(
  url: string,
  relativeUrlResolver: RelativeUrlResolver
): string {
  const EXTERNAL_URL_PATTERN = /^https?:\/\//

  if (!url || EXTERNAL_URL_PATTERN.test(url)) {
    return url
  }

  return relativeUrlResolver(url)
}
