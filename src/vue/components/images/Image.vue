<template>
  <img
    class="gio-base-image"
    :style="{ ...objectFitStyle }"
    :src="src"
    :alt="description"
    :title="description"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const Props = Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    objectFit: {
      type: String,
      required: false,
      validator: (value) => ['contain', 'cover'].includes(value)
    }
  }
})

@Component({
  name: 'GioImage'
})
export default class GioImage extends Props {
  get objectFitStyle(): { [key: string]: string } {
    if (!this.objectFit) return {}

    return {
      objectFit: this.objectFit
    }
  }
}
</script>

<style lang="scss">
.gio-base-image {
  display: block;
}
</style>
