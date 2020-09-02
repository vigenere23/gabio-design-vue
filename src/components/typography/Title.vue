<template>
  <div
    class="title"
    :class="{ dark, centered, ...noMarginClass }"
    :style="{ fontSize }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '../../mixins/darkable'
import { Centerable } from '../../mixins/centerable'
import { NoMarginable } from '../../mixins/no-marginable'
import { mixins } from 'vue-class-component'

const TitleProps = Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: '14rem'
    }
  }
})

@Component
export default class Title extends mixins(
  TitleProps,
  Darkable,
  Centerable,
  NoMarginable
) {}
</script>

<style lang="scss">
@import '~@/styles/fonts';
@import '~@/styles/colors';

.title {
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
