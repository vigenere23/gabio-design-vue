<template>
  <picture class="gio-image">
    <source
      v-for="(srcset, i) in srcsets"
      :key="i"
      :srcset="srcset"
      :type="imageType(srcset)"
    />
    <img
      class="gio-image__image"
      ref="image"
      :style="{ ...objectFitStyle }"
      :src="imageSrc"
      :alt="description"
      :title="description"
    />
  </picture>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const LOADING_IMAGE_SRC = '' // TODO add real default image

const Props = Vue.extend({
  props: {
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
  @Prop({ type: Array, required: true }) srcs!: string[]

  srcsets: string[] = []
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
      this.imageSrc = this.lastSrc
      this.srcsets = this.srcs
    }
  }

  imageType(imageSrc: string): string {
    const extension = imageSrc.split('.').pop()
    return `image/${extension}`
  }

  private get lastSrc(): string {
    return this.srcs[this.srcs.length - 1]
  }

  private startLazyLoading(): void {
    if (!('IntersectionObserver' in window)) return

    this.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        this.intersectionObserver = observer
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.srcsets = this.srcs
            this.imageSrc = this.lastSrc
            observer.unobserve(entry.target)
          }
        })
      }
    )
    this.intersectionObserver.observe(this.$refs.image as Element)
  }
}
</script>

<style lang="scss">
.gio-image {
  display: block;

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;

    &[src=''] {
      opacity: 0;
    }
  }
}
</style>
