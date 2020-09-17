<template>
  <div class="typography">
    <GioHeading :dark="dark" :level="1">GioTitle</GioHeading>
    <GioBodyText :dark="dark"
      >To use for page titles (this page has one).</GioBodyText
    >

    <GioHeading :dark="dark" :level="1">GioHeading</GioHeading>
    <GioBodyText :dark="dark">
      <GioInlineCode :dark="dark">GioHeading</GioInlineCode> offers multiple
      levels :
    </GioBodyText>

    <GioHeading :dark="dark" :level="1">Level 1 (main section)</GioHeading>
    <GioHeading :dark="dark" :level="2"
      >Level 2 (default, subsection)</GioHeading
    >
    <GioHeading :dark="dark" :level="3">Level 3 (subsubsection)</GioHeading>
    <GioHeading :dark="dark" :level="4"
      >Level 4 (example, precision, etc.)</GioHeading
    >

    <GioHeading :dark="dark" :level="1">GioBaseText</GioHeading>
    <GioBodyText :dark="dark"
      >This is the text that will be displayed everywhere in the app. You should
      NEVER use directly <GioInlineCode :dark="dark">p</GioInlineCode> or
      <GioInlineCode :dark="dark">span</GioInlineCode> tags to display text,
      since the font size will not be displayed correctly. There are several
      types of text available :</GioBodyText
    >
    <div class="typography__base-texts">
      <GioBaseText :dark="dark" type="primary">Primary (headings)</GioBaseText>
      <GioBaseText :dark="dark" type="secondary"
        >Secondary (default, main)</GioBaseText
      >
      <GioBaseText :dark="dark" type="tertiary"
        >Tertiary (captions, subtitles)</GioBaseText
      >
    </div>

    <GioHeading :dark="dark" :level="1">GioBodyText</GioHeading>
    <GioBodyText :dark="dark"
      >This should be uses for text paragraph. It is the same as
      <GioInlineCode :dark="dark">GioBaseText</GioInlineCode>, but with bigger
      <GioInlineCode :dark="dark">font-size</GioInlineCode>,
      <GioInlineCode :dark="dark">line-height</GioInlineCode> and
      <GioInlineCode :dark="dark">margin</GioInlineCode>.</GioBodyText
    >

    <GioHeading :dark="dark" :level="1">Special texts</GioHeading>
    <GioSubtitle :dark="dark">GioSubtitle</GioSubtitle>
    <GioCaption :dark="dark">GioCaption</GioCaption>

    <GioHeading :dark="dark" :level="1">Inline texts</GioHeading>
    <GioBodyText :dark="dark"
      >These texts act like
      <GioInlineCode :dark="dark">span</GioInlineCode> tags so they need to be
      encapsulated inside a Gio typography element in order to be displayed
      correctly.</GioBodyText
    >
    <GioBodyText :dark="dark"
      ><GioInlineCode :dark="dark">GioInlineCode</GioInlineCode></GioBodyText
    >
    <GioBaseText type="primary" :dark="!dark">
      <GioTag :dark="dark">GioTag (primary)</GioTag>
      <GioTag type="secondary" :dark="dark">GioTag (secondary)</GioTag>
    </GioBaseText>

    <GioHeading :dark="dark" :level="1">GioIcon</GioHeading>
    <GioBodyText :dark="dark"
      >Icons <GioIcon icon="heart"></GioIcon> from font-awesome (solid-svg and
      brand) can be used here. Please refer to the README for
      setup.</GioBodyText
    >

    <GioHeading :dark="dark" :level="1">GioSmartLink</GioHeading>
    <GioBodyText :dark="dark"
      >Used to auto-determine the
      <GioInlineCode :dark="dark">target</GioInlineCode> property and to use
      either a <GioInlineCode :dark="dark">router-link</GioInlineCode> or a
      simple <GioInlineCode :dark="dark">a</GioInlineCode> tag.</GioBodyText
    >
    <GioCaption :dark="dark"
      >Note : this component doesn't have any style.</GioCaption
    >
    <GioBodyText :dark="dark">
      <GioList>
        <GioListItem
          ><GioSmartLink href="./about"
            >internal link :
            <GioInlineCode :dark="dark">./about</GioInlineCode></GioSmartLink
          ></GioListItem
        >
        <GioListItem
          ><GioSmartLink href="https://google.com"
            >external link :
            <GioInlineCode :dark="dark"
              >https://google.com</GioInlineCode
            ></GioSmartLink
          ></GioListItem
        >
      </GioList>
    </GioBodyText>

    <GioHeading :dark="dark" :level="1"
      >GioList and GioListItem (beta)</GioHeading
    >
    <GioBodyText :dark="dark"
      >This shows a list with arrows as bullets. It does not support icon
      replacements nor multiple levels. It also acts as an inline text (see
      above).</GioBodyText
    >
    <GioBodyText :dark="dark">
      <GioList>
        <GioListItem>This is a normal list (default)</GioListItem>
      </GioList>
      <GioList indent>
        <GioListItem>This is an indented list</GioListItem>
      </GioList>
    </GioBodyText>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'

@Component
export default class Typography extends Darkable {}
</script>

<style lang="scss">
.typography {
  &__base-texts {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 8rem;
  }
}
</style>
