<template>
  <div class="gio-web-page" :class="{ 'full-height': fullHeight }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const Props = Vue.extend({
  props: {
    fullHeight: { type: Boolean, default: false }
  }
})

@Component({
  name: 'GioWebPage'
})
export default class GioWebPage extends Props {}
</script>

<style lang="scss">
@import '~@/lib/styles/sizes';

.gio-web-page {
  width: 100%;
  min-height: calc(100vh - #{$header-height});

  &.full-height {
    height: 100vh;
  }
}
</style>
