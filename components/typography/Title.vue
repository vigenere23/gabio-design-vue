<template>
  <div
    class="title"
    :class="{ dark, centered, ...noMarginClass }"
    :style="{ fontSize }"
  >
    <slot />
  </div>
</template>

<script>
import darkable from '../../mixins/darkable'
import centerable from '../../mixins/centerable'
import noMarginable from '../../mixins/no-marginable'

export default {
  mixins: [darkable, centerable, noMarginable],
  props: {
    fontSize: {
      type: String,
      default: '14rem'
    }
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/fonts';
@import '~@gio/styles/colors';

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
