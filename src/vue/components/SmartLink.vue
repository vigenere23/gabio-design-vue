<template>
  <component
    :is="component"
    :to="toProperty"
    :href="hrefProperty"
    :target="targetProperty"
    :event="event"
    :append="shouldAppend"
    rel="noopener"
    class="gio-smart-link"
    :class="{ accent, dark }"
    @click="$emit(event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
  props: {
    disable: { type: Boolean, default: false },
    href: { type: String },
    accent: { type: Boolean, default: false }
  }
})

@Component({
  name: 'GioSmartLink'
})
export default class GioSmartLink extends mixins(Props, Darkable) {
  get component(): string {
    return this.href ? (this.isRelativeLink ? 'router-link' : 'a') : 'div'
  }

  get targetProperty(): string | undefined {
    return !this.disable && this.href && !this.isRelativeLink
      ? '_blank'
      : undefined
  }

  get hrefProperty(): string | undefined {
    return !this.disable && !this.isRelativeLink ? this.href : undefined
  }

  get toProperty(): string | undefined {
    return this.isRelativeLink ? (this.disable ? '' : this.href) : undefined
  }

  get event(): string {
    return this.disable ? '' : 'click'
  }

  get isRelativeLink(): boolean {
    return /^\.?\//.test(this.href)
  }

  get shouldAppend(): boolean | undefined {
    return this.isRelativeLink ? /^\.\//.test(this.href) : undefined
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.gio-smart-link {
  &.accent {
    color: $primary-text-dark;
    text-decoration: underline;

    &.dark {
      color: $primary-text-light;
    }
  }
}
</style>
