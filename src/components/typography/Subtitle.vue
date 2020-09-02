<template>
  <div class="subtitle" :class="{ dark, centered, ...noMarginClass }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Darkable } from '../../mixins/darkable'
import { Centerable } from '../../mixins/centerable'
import { NoMarginable } from '../../mixins/no-marginable'
import { mixins } from 'vue-class-component'

@Component
export default class Subtitle extends mixins(
  Darkable,
  Centerable,
  NoMarginable
) {}
</script>

<style lang="scss">
@import '~@/styles/fonts';
@import '~@/styles/colors';
@import '~@/styles/sizes';

.subtitle {
  font-family: $special-font;
  font-size: 5.5rem;
  font-weight: 700;
  color: $tertiary-text-dark;

  &:not(.no-margin) {
    @include text-margin;
  }

  &.centered {
    text-align: center;
  }

  &.dark {
    color: $tertiary-text-light;
  }
}
</style>
