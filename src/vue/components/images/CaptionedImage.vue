<template>
  <div class="gio-captioned-image" :class="{ dark }" :style="{ width }">
    <GioBaseImage
      class="gio-captioned-image__image"
      :src="src"
      :caption="caption"
    />
    <template v-if="caption">
      <GioCaption
        class="gio-captioned-image__caption"
        no-margin
        no-border
        :dark="dark"
        >{{ caption }}</GioCaption
      >
    </template>
  </div>
</template>

<script lang="ts">
import { Darkable } from '@/lib/mixins/darkable'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
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

@Component({
  name: 'GioCaptionedImage'
})
export default class GioCaptionedImage extends mixins(Props, Darkable) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.gio-captioned-image {
  width: 100%;
  margin: 16px auto;
  border-radius: $border-radius-medium;

  &__image {
    display: block;
    width: 100%;
    border-radius: $border-radius-small;
    background-color: white;
    border: solid 3px $accent-light;
  }

  &.dark {
    .gio-captioned-image__image {
      border-color: dark(2);
    }
  }

  &__caption {
    margin-top: -3px;
  }
}
</style>
