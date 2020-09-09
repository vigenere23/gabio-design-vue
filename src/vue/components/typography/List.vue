<template>
  <ul class="gio-list" :class="{ indent, 'no-margin': noMargin }">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { NoMarginable } from '@/lib/mixins/no-marginable'

@Component({
  name: 'GioList',
  props: {
    indent: {
      type: Boolean,
      default: false
    }
  }
})
export default class GioList extends NoMarginable {}
</script>

<style lang="scss" scoped>
@import '~@/lib/styles/sizes';

.gio-list {
  line-height: 1.5em;
  list-style: none;
  padding: 0;
  margin: 0;

  &:not(.no-margin) {
    @include text-margin;
  }

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
