<template>
  <section
    class="gio-section"
    :class="{ dark, 'no-padding': noPadding }"
    :id="computedId"
  >
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
  props: {
    id: { type: String, required: false },
    noPadding: { type: Boolean, default: false }
  }
})

@Component({
  name: 'GioSection'
})
export default class GioSection extends mixins(Props, Darkable) {
  get computedId(): string | null {
    return this.id ? `#${this.id}` : null
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.gio-section {
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
