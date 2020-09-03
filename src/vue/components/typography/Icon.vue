<template>
  <fa-icon :icon="computedIcon" class="icon" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const IconProps = Vue.extend({
  props: {
    icon: {
      type: String,
      required: false
    },
    brand: {
      type: Boolean,
      default: false
    }
  }
})

@Component
export default class Icon extends IconProps {
  get computedIcon(): string[] | string {
    return this.brand ? ['fab', this.icon] : this.icon
  }
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0.9em;
}
</style>
