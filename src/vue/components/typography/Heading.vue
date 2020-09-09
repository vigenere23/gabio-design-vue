<template>
  <div class="gio-heading" :class="{ dark, ...noMarginClass, ...levelClass }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { NoMarginable } from '@/lib/mixins/no-marginable'
import { mixins } from 'vue-class-component'

type HeadingLevel = 1 | 2 | 3 | 4

const Props = Vue.extend({
  props: {
    level: {
      type: Number,
      default: 2,
      validator: (value: HeadingLevel): boolean => [1, 2, 3, 4].includes(value)
    }
  }
})

@Component({
  name: 'GioHeading'
})
export default class GioHeading extends mixins(Props, Darkable, NoMarginable) {
  get levelClass(): { [key: string]: boolean } {
    return {
      [`level-${this.level}`]: true
    }
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/fonts';
@import '~@/lib/styles/colors';

.gio-heading {
  font-family: $special-font;
  font-weight: 700;
  color: $primary-text-dark;

  &:not(.no-margin) {
    margin: 4rem 0;

    &.level-1 {
      margin-top: 8rem;
    }

    &.level-4 {
      margin: 2rem 0;
    }
  }

  &.dark {
    color: $primary-text-light;
    &.level-1 {
      border-bottom-color: $focus-dark;
    }
  }

  &.level-1 {
    font-size: 9.5rem;
    padding: 1rem 0;
    border-bottom: solid 0.75rem $focus-light;
  }

  &.level-2 {
    font-size: 7rem; // 8rem
  }

  &.level-3 {
    font-size: 6rem;
  }

  &.level-4 {
    font-size: 5rem;
  }
}
</style>
