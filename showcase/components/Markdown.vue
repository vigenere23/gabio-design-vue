<template>
  <div class="markdown">
    <GioMarkdownRenderer
      :markdownContent="markdownContent"
      :renderer="renderer"
    ></GioMarkdownRenderer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GioMarkdownRenderer } from '../../src/lib/utils/markdown'
import { RELATIVE_URL_RESOLVER } from '../constants'

@Component
export default class Markdown extends Vue {
  renderer = new GioMarkdownRenderer(RELATIVE_URL_RESOLVER)
  markdownContent = ''

  async mounted(): Promise<void> {
    const file = await import(`@showcase/data/example.md`)
    this.markdownContent = file.default
  }
}
</script>
