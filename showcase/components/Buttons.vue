<template>
  <div class="buttons">
    <GioHeading :dark="dark" :level="1">GioButton</GioHeading>
    <GioBodyText :dark="dark"
      >Buttons are offered in different sizes and margins can be removes with
      <GioInlineCode :dark="dark">no-margin-left</GioInlineCode> and
      <GioInlineCode :dark="dark">no-margin-right</GioInlineCode>.</GioBodyText
    >

    <div class="buttons__container">
      <GioButton :dark="dark" size="small">
        <span>small</span>
      </GioButton>
      <GioButton :dark="dark" size="medium">
        <span>medium</span>
      </GioButton>
      <GioButton :dark="dark" size="small" @click="onClick">
        <span>javascript</span>
      </GioButton>
      <GioButton :dark="dark" size="medium" href="https://google.com">
        <span>link</span>
      </GioButton>
      <GioButton :dark="dark" size="medium">
        <GioIcon icon="heart"></GioIcon>
        <span>icon left</span>
      </GioButton>
      <GioButton :dark="dark" size="medium">
        <span>icon right</span>
        <GioIcon icon="heart"></GioIcon>
      </GioButton>
      <GioButton :dark="!dark" size="small">
        <span>inverted</span>
      </GioButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'
import {
  GioButton,
  GioHeading,
  GioInlineCode,
  GioIcon,
  GioBodyText
} from '../../src/vue/components'

@Component({
  components: { GioButton, GioBodyText, GioHeading, GioInlineCode, GioIcon }
})
export default class Buttons extends Darkable {
  onClick(): void {
    alert('You clicked me you bastard!')
  }
}
</script>

<style lang="scss">
.buttons {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
