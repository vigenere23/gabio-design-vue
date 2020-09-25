<template>
  <div class="gio-captioned-image" :class="{ dark }" :style="{ width }">
    <GioImage
      class="gio-captioned-image__image"
      :srcs="srcs"
      :description="caption"
      :lazy="lazy"
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
import GioCaption from '@/vue/components/typography/Caption.vue'
import GioImage from '@/vue/components/images/Image.vue'

const Props = Vue.extend({
  props: {
    srcs: {
      type: Array,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '100%'
    },
    lazy: {
      type: Boolean,
      default: false
    }
  }
})

@Component({
  name: 'GioCaptionedImage',
  components: { GioImage, GioCaption }
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
