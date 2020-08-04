<template>
  <div
    class="caption"
    :class="{ dark, ...noMarginClass, 'no-border': noBorder }"
  >
    <GioBaseText type="tertiary" :dark="dark">
      <slot />
    </GioBaseText>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '../../mixins/darkable'
import { NoMarginable } from '../../mixins/no-marginable'
import { mixins } from 'vue-class-component'

const CaptionProps = Vue.extend({
  props: {
    noBorder: { type: Boolean, default: false }
  }
})

@Component
export default class Caption extends mixins(
  CaptionProps,
  Darkable,
  NoMarginable
) {}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/sizes';

.caption {
  display: block;
  padding: 1rem 3rem;
  background-color: $accent-light;
  border-radius: $border-radius-small;

  &:not(.no-border) {
    border-left: solid 0.75rem $tertiary-text-dark;
  }

  &:not(.no-margin) {
    @include text-margin;
  }

  &.dark {
    background-color: $accent-dark;
    border-left-color: $tertiary-text-light;
  }
}
</style>
