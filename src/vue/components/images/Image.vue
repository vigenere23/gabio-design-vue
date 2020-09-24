<template>
  <img
    ref="image"
    class="gio-base-image"
    :style="{ ...objectFitStyle }"
    :src="imageSrc"
    :data-src="dataImageSrc"
    :alt="description"
    :title="description"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const LOADING_IMAGE_SRC = '' // TODO add real default image

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
    lazy: {
      type: Boolean,
      default: false
    }
  }
})

@Component({
  name: 'GioImage'
})
export default class GioImage extends Props {
  imageSrc = LOADING_IMAGE_SRC
  intersectionObserver: IntersectionObserver | null = null

  get objectFitStyle(): { [key: string]: string } {
    if (!this.objectFit) return {}

    return {
      objectFit: this.objectFit
    }
  }

  mounted(): void {
    if (this.lazy) {
      this.startLazyLoading()
    } else {
      this.imageSrc = this.src
    }
  }

  get computedSrc(): string {
    return this.lazy ? LOADING_IMAGE_SRC : this.src
  }

  get dataImageSrc(): string | undefined {
    return this.lazy ? this.src : undefined
  }

  private startLazyLoading(): void {
    if (!('IntersectionObserver' in window)) return

    this.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        this.intersectionObserver = observer
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target as HTMLImageElement
            this.imageSrc = lazyImage.dataset.src as string
            observer.unobserve(lazyImage)
          }
        })
      }
    )
    this.intersectionObserver.observe(this.$refs.image as Element)
  }
}
</script>

<style lang="scss">
.gio-base-image {
  display: block;
}
</style>
