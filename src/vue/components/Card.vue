<template>
  <GioSmartLink
    class="gio-card"
    :class="{ dark, 'not-ready': notReady }"
    :href="href"
    :disable="notReady"
  >
    <div class="gio-card__overlay" v-if="notReady">
      <GioHeading :level="3" :dark="dark">Coming soon!</GioHeading>
    </div>
    <div class="gio-card__image-wrapper">
      <GioImage class="gio-card__image" :src="image" :objectFit="imageSize" />
    </div>
    <div class="gio-card__content">
      <GioHeading class="gio-card__title" :level="3" :dark="dark">{{
        title
      }}</GioHeading>
      <GioText type="primary" :dark="!dark" class="gio-card__tags">
        <GioTag v-for="tag in tags" :key="tag" :dark="dark">{{ tag }}</GioTag>
      </GioText>
      <GioText class="gio-card__desc" :dark="dark">{{ desc }}</GioText>
      <div class="gio-card__actions">
        <GioButton size="small" :dark="!dark" no-margin-right :href="href">
          <span>details</span>
          <GioIcon
            icon="external-link-alt"
            class="gio-card__button-details__icon"
          ></GioIcon>
        </GioButton>
      </div>
    </div>
  </GioSmartLink>
</template>

<script lang="ts">
import { Darkable } from '@/lib/mixins/darkable'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

const Props = Vue.extend({
  props: {
    href: String,
    image: String,
    title: String,
    tags: Array,
    desc: String,
    imageSize: String,
    notReady: {
      type: Boolean,
      default: false
    }
  }
})

@Component({
  name: 'GioCard'
})
export default class GioCard extends mixins(Props, Darkable) {}
</script>

<style lang="scss">
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';
@import '~@/lib/styles/transitions';

.gio-card {
  display: block;
  width: 70rem;
  margin: 4rem;
  padding: 2rem;
  overflow: hidden;
  border-radius: $border-radius-medium;
  background-color: $accent-light;
  border: solid 3px $accent-light;
  @include transition(base, out, background-color);

  &:hover,
  &:focus,
  &:active {
    border-color: $accent-dark;
    background-color: $focus-light;
    @include transition(base, in, background-color, border-color);
  }

  &.dark {
    background-color: $accent-dark;
    border-color: $accent-dark;

    .gio-card__overlay {
      background-color: rgba($focus-dark, 0.9);
    }

    &:focus,
    &:active,
    &:hover {
      background-color: $focus-dark;
      border-color: $accent-light;
    }
  }

  &.not-ready {
    cursor: default;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: rgba($focus-light, 0.9);
  }

  &__image-wrapper {
    width: 100%;
    padding-bottom: 100% / 16 * 10;
    background-color: lighten($background-light, 2%);
    border-radius: $border-radius-small;
    overflow: hidden;
    position: relative;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    padding: 2rem;
    padding-top: 0;
  }

  &__title {
    margin-bottom: 1rem;
    line-height: 1.2em;
    height: 1.2em;
    overflow: hidden;
  }

  &__type {
    margin-bottom: 4rem;
    text-transform: capitalize;
    line-height: 1.2em;
    height: 1.2em;
    overflow: hidden;
  }

  &__tags {
    margin-bottom: 4rem;
  }

  &__desc {
    line-height: 1.2em;
    height: 4 * 1.2em;
    overflow: hidden;
  }

  &__actions {
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;
  }

  &__button-details__icon {
    padding-bottom: 0.5rem;
  }
}
</style>
