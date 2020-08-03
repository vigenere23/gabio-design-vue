<template>
  <div
    class="content"
    :class="{ 'no-padding': noPadding }"
    :style="{ maxWidth: width }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  }
}
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
