<template>
  <div class="base-text" :class="{ dark, ...typeClass }">
    <slot />
  </div>
</template>

<script>
import darkable from '../../mixins/darkable'

export default {
  mixins: [darkable],
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
      const classes = {}
      classes[this.type] = true
      return classes
    }
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/fonts';

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
