<template>
  <div class="page" :class="{ 'full-height': fullHeight }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fullHeight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/sizes';

.page  {
  width: 100%;
  min-height: calc(100vh - #{$header-height});

  &.full-height {
    height: 100vh;
  }
}
</style>
