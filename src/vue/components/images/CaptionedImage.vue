<template>
  <div class="captioned-image" :class="{ dark }" :style="{ width }">
    <GioBaseImage
      class="captioned-image__image"
      :class="{ bordered: !caption }"
      :src="src"
      :caption="caption"
    />
    <template v-if="caption">
      <GioCaption no-margin no-border :dark="dark">{{ caption }}</GioCaption>
    </template>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../../lib/mixins/darkable'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

const CaptionedImageProps = Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '100%'
    }
  }
})

@Component
export default class CaptionedImage extends mixins(
  CaptionedImageProps,
  Darkable
) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.captioned-image {
  width: 100%;
  margin: 16px auto;
  background-color: white;
  border: solid 3px $accent-light;
  border-radius: $border-radius-medium;

  &.dark {
    .captioned-image__image {
      border-color: dark(2);
    }
  }

  &__image {
    display: block;
    width: 100%;
    border-radius: $border-radius-small;

    &:not(.bordered) {
      border-bottom: none;
    }
  }
}
</style>
