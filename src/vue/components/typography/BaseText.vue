<template>
  <div class="base-text" :class="{ dark, ...typeClass }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '../../../lib/mixins/darkable'
import { mixins } from 'vue-class-component'

type TextType = 'primary' | 'secondary' | 'tertiary'

const BaseTextProps = Vue.extend({
  props: {
    type: {
      type: String,
      default: 'secondary',
      validator: (value: TextType): boolean => {
        return ['primary', 'secondary', 'tertiary'].includes(value)
      }
    }
  }
})

@Component
export default class BaseText extends mixins(BaseTextProps, Darkable) {
  get typeClass(): { [key: string]: boolean } {
    return {
      [this.type]: true
    }
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/fonts';

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
