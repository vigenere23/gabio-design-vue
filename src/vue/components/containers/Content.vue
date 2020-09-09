<template>
  <div
    class="gio-content"
    :class="{ 'no-padding': noPadding }"
    :style="{ maxWidth: width }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const Props = Vue.extend({
  props: {
    width: { type: String, required: false },
    noPadding: { type: Boolean, default: false }
  }
})

@Component({
  name: 'GioContent'
})
export default class GioContent extends Props {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.gio-content {
  width: 100%;
  max-width: $page-width;
  margin: auto;

  &:not(.no-padding) {
    padding: 0 12px;
  }
}
</style>
