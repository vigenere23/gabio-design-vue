<template>
  <div class="base-text" :class="{ dark, ...typeClass }">
    <slot />
  </div>
</template>

<script>
import { Darkable } from '../../mixins/darkable'

export default {
  mixins: [Darkable],
  props: {
    type: {
      type: String,
      default: 'secondary',
      validator: value => {
        return ['primary', 'secondary', 'tertiary'].includes(value)
      }
    }
  },
  computed: {
    typeClass() {
      return {
        [this.type]: true
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/colors';
@import '~@/styles/fonts';

.base-text {
  font-family: $classic-font;
  font-size: 4rem;
  font-weight: 500;

  &.primary {
    color: $primary-text-dark;
  }

  &.secondary {
    color: $secondary-text-dark;
  }

  &.tertiary {
    color: $tertiary-text-dark;
  }

  &.dark {
    &.primary {
      color: $primary-text-light;
    }

    &.secondary {
      color: $secondary-text-light;
    }

    &.tertiary {
      color: $tertiary-text-light;
    }
  }
}
</style>
