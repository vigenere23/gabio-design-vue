<template>
  <GioSmartLink
    class="button"
    :class="{
      dark,
      'no-margin-left': noMarginLeft,
      'no-margin-right': noMarginRight,
      ...sizeClass
    }"
    :href="href"
    @click="$emit('click')"
  >
    <GioBaseText :dark="dark" type="primary" class="button-content">
      <slot></slot>
    </GioBaseText>
  </GioSmartLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Darkable } from '../mixins/darkable'
import { mixins } from 'vue-class-component'
import { Component, Prop } from 'vue-property-decorator'

type Size = 'small' | 'medium'

const ButtonProps = Vue.extend({
  props: {
    href: { type: String, required: false },
    noMarginLeft: { type: Boolean, default: false },
    noMarginRight: { type: Boolean, default: false }
  }
})

@Component
export default class Button extends mixins(ButtonProps, Darkable) {
  @Prop({ type: String, default: 'medium' }) size!: Size

  get sizeClass(): { [key: string]: boolean } {
    return {
      [this.size]: true
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/colors';
@import '~@/styles/transitions';
@import '~@/styles/sizes';

.button {
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: $accent-light;
  color: $primary-text-dark;
  cursor: pointer;
  @include transition(base, out, color, background-color);

  &.medium {
    height: 9rem;
    padding: 0 3rem;
    border-radius: $border-radius-medium;
  }

  &.small {
    height: 8rem;
    padding: 0 2.5rem;
    border-radius: $border-radius-medium;

    .button-content > * {
      font-size: 0.9em;
    }
  }

  &:not(.no-margin-left) {
    margin-left: 2rem;
  }

  &:not(.no-margin-right) {
    margin-right: 2rem;
  }

  &:hover,
  &:active,
  &:focus {
    @include transition(base, in, color, background-color);
  }

  &:active,
  &:focus {
    background-color: $focus-light;
  }

  &:hover {
    background-color: $hover-light;
  }

  &.dark {
    background-color: $accent-dark;
    color: $primary-text-light;

    &:active,
    &:focus {
      background-color: $focus-dark;
    }

    &:hover {
      background-color: $hover-dark;
    }
  }

  > * {
    flex: 0 0 auto;
  }

  .button-content {
    text-transform: uppercase;

    > :not(:first-child) {
      margin-left: 2rem;
    }

    > * {
      vertical-align: middle;
    }
  }
}
</style>
