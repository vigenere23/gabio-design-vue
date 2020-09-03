<template>
  <GioBaseText class="body-text" :dark="dark">
    <slot />
  </GioBaseText>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Darkable } from '../../../lib/mixins/darkable'

@Component
export default class BodyText extends Darkable {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.body-text {
  line-height: 1.6em;
  text-align: justify;
  @include text-margin;
  font-size: 4.25rem;
}
</style>
