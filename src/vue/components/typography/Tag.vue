<template>
  <span class="gio-tag" :class="{ dark }">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Darkable } from '@/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'GioTag'
})
export default class GioTag extends Darkable {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.gio-tag {
  font-size: 0.75em;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  background-color: $accent-dark;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-right: 1.25rem;
  border-radius: 0.5rem;
  display: inline-block;

  &.dark {
    background-color: $accent-light;
  }
}
</style>
