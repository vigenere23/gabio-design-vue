<template>
  <section
    class="section"
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

const SectionProps = Vue.extend({
  props: {
    id: { type: String, required: false },
    noPadding: { type: Boolean, default: false }
  }
})

@Component
export default class Section extends mixins(SectionProps, Darkable) {
  get computedId(): string | null {
    return this.id ? `#${this.id}` : null
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

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
