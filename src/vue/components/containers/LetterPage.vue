<template>
  <div class="gio-letter-page">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'GioLetterPage'
})
export default class GioLetterPage extends Vue {}
</script>

<style lang="scss">
.gio-letter-page {
  width: 8.5in;
  height: 11in;
}
</style>
