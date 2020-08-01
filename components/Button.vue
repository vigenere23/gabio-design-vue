<template>
  <GioSmartLink
    class="button"
    :class="{ dark, 'no-margin-left': noMarginLeft, 'no-margin-right': noMarginRight }"
    :href="href"
    @click="$emit('click')"
  >
    <GioBaseText class="button__text" v-if="text" :dark="dark" type="primary" no-margin>
      <span class="button__icon" v-if="icon">
        <fa-icon :icon="computedIcon" />
      </span>
      {{ text }}
    </GioBaseText>
  </GioSmartLink>
</template>

<script>
import darkable from '../mixins/darkable'

export default {
  mixins: [
    darkable
  ],
  props: {
    icon: {
      type: String,
      required: false
    },
    brand: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: false
    },
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
  },
  computed: {
    computedIcon () {
      return this.brand
        ? ['fab', this.icon]
        : this.icon
    }
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/transitions';
@import '~@gio/styles/sizes';

.button {
  height: 9rem;
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

  &:hover, &:active, &:focus {
    @include transition(base, in, color, background-color);
  }

  &:active, &:focus {
    background-color: $focus-light;
  }

  &:hover {
    background-color: $hover-light;
  }

  &.dark {
    background-color: $accent-dark;
    color: $primary-text-light;

    &:active, &:focus {
      background-color: $focus-dark;
    }

    &:hover {
      background-color: $hover-dark;
    }
  }

  &__icon {
    font-size: 0.9em;
    margin-right: 1rem;
    flex: 0 0 auto;
  }

  &__text {
    text-transform: uppercase;
    flex: 0 0 auto;
  }
}
</style>
