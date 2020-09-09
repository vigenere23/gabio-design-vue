<template>
  <span class="gio-inline-code" :class="{ dark }">
    <slot />
  </span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'

@Component({
  name: 'GioInlineCode'
})
export default class GioInlineCode extends Darkable {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/fonts';
@import '~@/lib/styles/sizes';

.gio-inline-code {
  padding: 0.5rem 1rem;
  color: $secondary-text-dark;
  background-color: $accent-light;
  border-radius: $border-radius-small;
  font-family: $code-font;
  font-weight: inherit;
  font-size: 0.9em;

  &.dark {
    background-color: $accent-dark;
    color: $secondary-text-light;
  }
}
</style>
