<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class List extends Vue {}
</script>

<style lang="scss" scoped>
.list {
  font-size: 4rem;
  line-height: 1.5em;
  list-style: none;
  padding: 0;
}
</style>
