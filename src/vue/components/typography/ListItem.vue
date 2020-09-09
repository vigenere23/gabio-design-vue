<template>
  <li class="gio-list-item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'GioListItem'
})
export default class GioListItem extends Vue {}
</script>

<style lang="scss" scoped>
.gio-list-item {
  padding-left: 1.5em;
  line-height: inherit;
  margin-bottom: 0.3em;

  &::before {
    content: '\279C'; // HEAVY ROUND-TIPPED RIGHT ARROW
    position: absolute;
    left: 0.25em;
    color: inherit;
  }
}
</style>
