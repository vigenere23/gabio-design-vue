<template>
  <div class="letter-page">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LetterPage extends Vue {}
</script>

<style lang="scss">
.letter-page {
  width: 8.5in;
  height: 11in;
}
</style>
