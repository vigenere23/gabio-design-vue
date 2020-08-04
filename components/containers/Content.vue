<template>
  <div
    class="content"
    :class="{ 'no-padding': noPadding }"
    :style="{ maxWidth: width }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

const ContentProps = Vue.extend({
  props: {
    width: { type: String, required: false },
    noPadding: { type: Boolean, default: false }
  }
})

@Component
export default class Content extends ContentProps {}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/sizes';

.content {
  width: 100%;
  max-width: $page-width;
  margin: auto;

  &:not(.no-padding) {
    padding: 0 12px;
  }
}
</style>
