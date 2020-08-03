<template>
  <span class="inline-code" :class="{ dark }">
    <slot />
  </span>
</template>

<script>
import darkable from '../../mixins/darkable'

export default {
  mixins: [darkable]
}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/fonts';
@import '~@gio/styles/sizes';

.inline-code {
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
