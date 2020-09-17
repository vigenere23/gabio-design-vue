<template>
  <span class="gio-tag" :class="{ dark, ...typeClass }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Darkable } from '@/lib/mixins/darkable'
import { Component, Prop } from 'vue-property-decorator'

type TagType = 'primary' | 'secondary'

@Component({
  name: 'GioTag'
})
export default class GioTag extends Darkable {
  @Prop({ type: String, default: 'primary' }) type!: TagType

  get typeClass(): { [key: string]: boolean } {
    return { [this.type]: true }
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.gio-tag {
  font-size: 0.75em;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-right: 1.25rem;
  border-radius: 0.5rem;
  display: inline-block;

  &.primary {
    background-color: $accent-dark;
  }

  &.secondary {
    background-color: $hover-dark;
  }

  &.dark {
    &.primary {
      background-color: $accent-light;
    }

    &.secondary {
      background-color: $hover-light;
    }
  }
}
</style>
