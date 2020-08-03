<template>
  <component
    :is="component"
    :to="toProperty"
    :href="hrefProperty"
    :target="targetProperty"
    :event="event"
    :append="shouldAppend"
    @click="$emit(event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class SmartLink extends Vue {
  @Prop({ type: Boolean, default: false })
  disable!: string

  @Prop({ type: String })
  href!: string

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
