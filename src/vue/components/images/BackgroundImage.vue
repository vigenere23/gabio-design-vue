<template>
  <div
    class="background-image"
    :style="{
      backgroundImage: `url(${src})`,
      backgroundSize
    }"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { mixins } from 'vue-class-component'

type BackgroundSize = 'cover' | 'contain'

const BackgroundImageProps = Vue.extend({
  props: {
    src: String,
    backgroundSize: {
      type: String,
      default: 'cover',
      validator: (value: BackgroundSize): boolean =>
        ['cover', 'contain'].includes(value)
    }
  }
})

@Component
export default class Backgroundimage extends mixins(
  BackgroundImageProps,
  Darkable
) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.background-image {
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
