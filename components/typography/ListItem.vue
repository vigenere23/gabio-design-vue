<template>
  <li class="list-item">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
.list-item {
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
