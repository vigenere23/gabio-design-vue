<template>
  <section class="section" :class="{ dark, 'no-padding': noPadding }" :id="computedId">
    <slot />
  </section>
</template>

<script>
import darkable from '../../mixins/darkable'

export default {
  mixins: [
    darkable
  ],
  props: {
    id: {
      type: String,
      required: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedId () {
      return this.id
        ? `#${this.id}`
        : null
    }
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/colors';

.section {
  width: 100%;
  background-color: $background-light;

  &:not(.no-padding) {
    padding: 56px 0;
  }

  &.dark {
    background-color: $background-dark;
  }
}
</style>
