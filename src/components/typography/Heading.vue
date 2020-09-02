<template>
  <div class="heading" :class="{ dark, ...noMarginClass, ...levelClass }">
    <slot />
  </div>
</template>

<script>
import { Darkable } from '../../mixins/darkable'
import { NoMarginable } from '../../mixins/no-marginable'

export default {
  mixins: [Darkable, NoMarginable],
  props: {
    level: {
      type: Number,
      default: 2,
      validator: value => [1, 2, 3, 4].includes(value)
    }
  },
  computed: {
    levelClass() {
      return {
        [`level-${this.level}`]: true
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/fonts';
@import '~@/styles/colors';

.heading {
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
