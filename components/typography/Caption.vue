<template>
  <div class="caption" :class="{ dark, ...noMarginClass, 'no-border': noBorder }">
    <GioBaseText type="tertiary" :dark="dark">
      <slot />
    </GioBaseText>
  </div>
</template>

<script>
import darkable from '../../mixins/darkable'
import noMarginable from '../../mixins/no-marginable'

export default {
  mixins: [
    darkable,
    noMarginable
  ],
  props: {
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
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
