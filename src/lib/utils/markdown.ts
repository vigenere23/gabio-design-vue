import marked from 'marked'
import { resolveURL, RelativeUrlResolver } from './url'

export class GioMarkdownRenderer extends marked.Renderer {
  constructor(private relativeUrlResolver: RelativeUrlResolver) {
    super()
  }

  heading(text: string, level: number): string {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
    return level === 1
      ? `<GioTitle no-margin fontSize="12rem">${text}</GioTitle>`
      : level === 6
      ? `<GioSubtitle>${text}</GioSubtitle>`
      : `<GioHeading :level="${
          level - 1
        }" id="#${escapedText}">${text}</GioHeading>`
  }

  paragraph(text: string): string {
    return `<GioBodyText>${text}</GioBodyText>`
  }

  image(href: string, title: string, text: string): string {
    return `
      <GioCaptionedImage
        src="${resolveURL(href, this.relativeUrlResolver)}"
        caption="${text || title || ''}"
        preventLazyLoading
      />
    `
  }

  blockquote(quote: string): string {
    return `<GioCaption>${quote}</GioCaption>`
  }

  codespan(code: string): string {
    return `<GioInlineCode>${code}</GioInlineCode>`
  }

  code(code: string, language?: string): string {
    return `<GioCodeBlock language="${language}" code="${encodeURI(code)}" />`
  }

  list(body: string /*ordered: boolean, start: number*/): string {
    return `<GioBodyText no-margin><GioList indent>${body}</GioList></GioBodyText>`
  }

  listitem(text: string): string {
    return `<GioListItem>${text}</GioListItem>`
  }

  link(href: string, _title: string, text: string) {
    return `<GioSmartLink accent href="${href}">${text}</GioSmartLink>`
  }
}

export class MarkdownParser {
  constructor(private renderer: marked.Renderer) {}

  parse(markdown: string): string {
    return marked(markdown, {
      renderer: this.renderer
    })
  }
}
