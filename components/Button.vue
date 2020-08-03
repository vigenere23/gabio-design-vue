<template>
  <GioSmartLink
    class="button"
    :class="{
      dark,
      'no-margin-left': noMarginLeft,
      'no-margin-right': noMarginRight
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
import darkable from '../mixins/darkable'

export default Vue.extend({
  mixins: [darkable],
  props: {
    href: {
      type: String,
      required: false
    },
    noMarginLeft: {
      type: Boolean,
      default: false
    },
    noMarginRight: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/transitions';
@import '~@gio/styles/sizes';

.button {
  height: 9rem;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: $accent-light;
  color: $primary-text-dark;
  padding: 0 3rem;
  border-radius: $border-radius-medium;
  cursor: pointer;
  @include transition(base, out, color, background-color);
  display: flex;
  align-items: center;

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
  }
}
</style>
