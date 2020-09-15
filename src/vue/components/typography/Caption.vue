<template>
  <div
    class="gio-caption"
    :class="{ dark, ...noMarginClass, 'no-border': noBorder }"
  >
    <GioBaseText type="secondary" :dark="dark">
      <slot />
    </GioBaseText>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { NoMarginable } from '@/lib/mixins/no-marginable'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
  props: {
    noBorder: { type: Boolean, default: false }
  }
})

@Component({
  name: 'GioCaption'
})
export default class GioCaption extends mixins(Props, Darkable, NoMarginable) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.gio-caption {
  display: block;
  padding: 2.5rem 3rem;
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

  .gio-body-text,
  .gio-base-text {
    line-height: normal;
  }

  .gio-body-text {
    font-size: inherit;
    margin: 0;
  }
}
</style>
