<template>
  <div class="web-page" :class="{ 'full-height': fullHeight }">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const WebPageProps = Vue.extend({
  props: {
    fullHeight: { type: Boolean, default: false }
  }
})

@Component
export default class WebPage extends WebPageProps {}
</script>

<style lang="scss">
@import '~@/styles/sizes';

.web-page {
  width: 100%;
  min-height: calc(100vh - #{$header-height});

  &.full-height {
    height: 100vh;
  }
}
</style>
