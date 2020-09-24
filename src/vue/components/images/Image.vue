<template>
  <img
    ref="image"
    class="gio-base-image"
    :style="{ ...objectFitStyle }"
    :src="computedSrc"
    :data-src="computedDataSrc"
    :alt="description"
    :title="description"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const DEFAULT_IMAGE_SRC = '' // TODO add real default image

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
    },
    preventLazyLoading: {
      type: Boolean,
      default: false
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

  created(): void {
    if (this.preventLazyLoading) return

    this.startLazyLoading()
  }

  get computedSrc(): string {
    return this.preventLazyLoading ? this.src : DEFAULT_IMAGE_SRC
  }

  get computedDataSrc(): string {
    return this.preventLazyLoading ? DEFAULT_IMAGE_SRC : this.src
  }

  private startLazyLoading(): void {
    document.addEventListener('DOMContentLoaded', () => {
      if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver((
          entries /*, observer*/
        ) => {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target as HTMLImageElement
              if (lazyImage.dataset.src) {
                lazyImage.src = lazyImage.dataset.src as string
                lazyImageObserver.unobserve(lazyImage)
              }
            }
          })
        })

        lazyImageObserver.observe(this.$refs.image as Element)
      } else {
        // Possibly fall back to event handlers here
      }
    })
  }
}
</script>

<style lang="scss">
.gio-base-image {
  display: block;
}
</style>
