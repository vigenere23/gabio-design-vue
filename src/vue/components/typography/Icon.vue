<template>
  <fa-icon :icon="computedIcon" class="gio-icon" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const Props = Vue.extend({
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

@Component({
  name: 'GioIcon'
})
export default class GioIcon extends Props {
  get computedIcon(): string[] | string {
    return this.brand ? ['fab', this.icon] : this.icon
  }
}
</script>

<style lang="scss" scoped>
.gio-icon {
  font-size: 0.9em;
}
</style>
