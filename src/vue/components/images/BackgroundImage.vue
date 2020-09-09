<template>
  <div
    class="gio-background-image"
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

const Props = Vue.extend({
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

@Component({
  name: 'GioBackgroundimage'
})
export default class GioBackgroundimage extends mixins(Props, Darkable) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';

.gio-background-image {
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
