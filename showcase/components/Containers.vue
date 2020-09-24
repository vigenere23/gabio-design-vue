<template>
  <div class="containers">
    <GioHeading :dark="dark" :level="1">Containers</GioHeading>
    <GioBodyText :dark="dark"
      >The gio-library offers some containers to help you create pages, sections
      and centered content.</GioBodyText
    >
    <GioBodyText :dark="dark">
      <GioList>
        <GioListItem
          ><GioInlineCode :dark="dark">GioWebPage</GioInlineCode> : makes the
          width 100% and the height at least 100%</GioListItem
        >
        <GioListItem
          ><GioInlineCode :dark="dark">GioLetterPage</GioInlineCode> : gives the
          Letter page dimensions</GioListItem
        >
        <GioListItem
          ><GioInlineCode :dark="dark">GioSection</GioInlineCode> : padded
          section that can be darked</GioListItem
        >
        <GioListItem
          ><GioInlineCode :dark="dark">GioContent</GioInlineCode> : centers
          content with a max-width</GioListItem
        >
      </GioList>
    </GioBodyText>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'
import {
  GioHeading,
  GioBodyText,
  GioList,
  GioListItem,
  GioInlineCode
} from '../../src/vue/components'

@Component({
  components: { GioHeading, GioBodyText, GioList, GioListItem, GioInlineCode }
})
export default class Containers extends Darkable {}
</script>
