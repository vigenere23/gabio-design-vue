<template>
  <img class="gio-base-image" :src="src" :alt="caption" :title="caption" />
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
    caption: {
      type: String,
      required: false
    }
  }
})

@Component({
  name: 'GioBaseImage'
})
export default class GioBaseImage extends Props {}
</script>

<style lang="scss">
.gio-base-image {
  display: block;
}
</style>
