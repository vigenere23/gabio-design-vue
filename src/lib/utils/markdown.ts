import marked from 'marked'
import DOMPurify from 'dompurify'
import { resolveURL, RelativeUrlResolver } from './url'

export class GioMarkdownRenderer extends marked.Renderer {
  constructor(private relativeUrlResolver: RelativeUrlResolver) {
    super()
  }

  heading(text: string, level: number): string {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
    return level === 1
      ? `<GioTitle no-margin>${text}</GioTitle>`
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
      />
    `
  }

  blockquote(quote: string): string {
    quote = DOMPurify.sanitize(quote)
    return `<GioCaption>${quote}</GioCaption>`
  }

  codespan(code: string): string {
    return `<GioInlineCode>${code}</GioInlineCode>`
  }

  code(code: string, language?: string): string {
    return `<GioCodeBlock language="${language}" code="${encodeURI(code)}" />`
  }

  list(body: string /*, ordered: boolean, start: number*/): string {
    return `<GioBodyText><GioList indent>${body}</GioList></GioBodyText>`
  }

  listitem(text: string): string {
    return `<GioListItem>${text}</GioListItem>`
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
