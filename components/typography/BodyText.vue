<template>
  <GioBaseText class="body-text" :dark="dark">
    <slot />
  </GioBaseText>
</template>

<script>
import darkable from '../../mixins/darkable'

export default {
  mixins: [darkable]
}
</script>

<style lang="scss">
@import '~@gio/styles/colors';
@import '~@gio/styles/sizes';

.body-text {
  line-height: 1.6em;
  text-align: justify;
  @include text-margin;
  font-size: 4.25rem;
}
</style>
