<template>
  <img :src="src" :alt="caption" :title="caption" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const BaseImageProps = Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    }
  }
})

@Component
export default class BaseImage extends BaseImageProps {}
</script>

<style lang="scss">
img {
  display: block;
}
</style>
