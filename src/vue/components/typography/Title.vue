<template>
  <div
    class="gio-title"
    :class="{ dark, centered, ...noMarginClass }"
    :style="{ fontSize }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { Centerable } from '@/lib/mixins/centerable'
import { NoMarginable } from '@/lib/mixins/no-marginable'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: '14rem'
    }
  }
})

@Component({
  name: 'GioTitle'
})
export default class GioTitle extends mixins(
  Props,
  Darkable,
  Centerable,
  NoMarginable
) {}
</script>

<style lang="scss">
@import '~@/lib/styles/fonts';
@import '~@/lib/styles/colors';

.gio-title {
  font-family: $special-font;
  font-weight: 700;
  color: $primary-text-dark;

  &:not(.no-margin) {
    margin: 8rem 0;
  }

  &.centered {
    text-align: center;
  }

  &.dark {
    color: $primary-text-light;
  }
}
</style>
