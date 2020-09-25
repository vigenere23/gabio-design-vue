<template>
  <GioText
    class="gio-body-text"
    :dark="dark"
    :class="{ 'no-margin': noMargin }"
  >
    <slot />
  </GioText>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Darkable } from '@/lib/mixins/darkable'
import { NoMarginable } from '@/lib/mixins/no-marginable'
import { mixins } from 'vue-class-component'
import GioText from '@/vue/components/typography/Text.vue'

@Component({
  name: 'GioBodyText',
  components: { GioText }
})
export default class GioBodyText extends mixins(Darkable, NoMarginable) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.gio-body-text {
  line-height: 1.8em;
  font-size: 4.5rem;

  &:not(.no-margin) {
    @include text-margin;
  }
}
</style>
