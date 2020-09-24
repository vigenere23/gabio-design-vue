<template>
  <GioVueRenderer :vueString="parsedMarkdown"></GioVueRenderer>
</template>

<script lang="ts">
import marked from 'marked'
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MarkdownParser } from '@/lib/utils/markdown'
import GioVueRenderer from '@/vue/components/VueRenderer.vue'

@Component({
  name: 'GioMarkdownRenderer',
  components: { GioVueRenderer }
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
