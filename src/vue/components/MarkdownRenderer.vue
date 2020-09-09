<template>
  <GioVueRenderer :htmlString="parsedMarkdown"></GioVueRenderer>
</template>

<script lang="ts">
import marked from 'marked'
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MarkdownParser } from '@/lib/utils/markdown'

@Component({
  name: 'GioMarkdownRenderer'
})
export default class GioMarkdownRenderer extends Vue {
  @Prop({ type: String }) markdownContent!: string
  @Prop({ type: Object }) renderer!: marked.Renderer

  get parsedMarkdown(): string {
    const markdownParser = new MarkdownParser(this.renderer)
    return markdownParser.parse(this.markdownContent)
  }
}
</script>
