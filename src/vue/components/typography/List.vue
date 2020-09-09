<template>
  <ul class="gio-list" :class="{ indent }">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'GioList',
  props: {
    indent: {
      type: Boolean,
      default: false
    }
  }
})
export default class GioList extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/lib/styles/sizes';

.gio-list {
  line-height: 1.5em;
  list-style: none;
  padding: 0;
  @include text-margin;

  &.indent {
    margin-left: 6rem;
  }

  .gio-list {
    margin: 0;

    &.indent {
      margin-left: 0;
    }
  }
}
</style>
