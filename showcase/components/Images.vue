<template>
  <div class="images">
    <GioHeading :dark="dark" :level="1">GioCaptionedImage</GioHeading>
    <GioBodyText :dark="dark"
      >To display an image with its caption beneath, plus with adjustable
      width.</GioBodyText
    >
    <GioCaptionedImage
      :dark="dark"
      src="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
      caption="A captioned image"
      width="50%"
    ></GioCaptionedImage>

    <GioHeading :dark="dark" :level="1">GioBaseImage</GioHeading>
    <GioBodyText :dark="dark"
      >To display a block image with its
      <GioInlineCode :dark="dark">title</GioInlineCode> and
      <GioInlineCode :dark="dark">alt</GioInlineCode> properties
      filled.</GioBodyText
    >
    <GioBaseImage
      class="images__smaller-image"
      src="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
      caption="A captioned image"
    ></GioBaseImage>

    <GioHeading :dark="dark" :level="1">GioBackgroundImage</GioHeading>
    <GioBodyText :dark="dark"
      >To display an image as a background image. You can set the
      <GioInlineCode :dark="dark">backgroundSize</GioInlineCode> property to
      either <GioInlineCode :dark="dark">contain</GioInlineCode> or
      <GioInlineCode :dark="dark">cover</GioInlineCode></GioBodyText
    >
    <div class="images__background">
      <div class="images__background__container">
        <GioBodyText :dark="dark">contain</GioBodyText>
        <GioBackgroundImage
          class="images__background__image"
          src="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
          backgroundSize="contain"
        ></GioBackgroundImage>
      </div>
      <div class="images__background__container">
        <GioBodyText :dark="dark">cover</GioBodyText>
        <GioBackgroundImage
          class="images__background__image"
          src="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
          backgroundSize="cover"
        ></GioBackgroundImage>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'

@Component
export default class Images extends Darkable {}
</script>

<style lang="scss">
.images {
  &__smaller-image {
    width: 50%;
    margin: auto;
  }

  &__background {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &__container {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__image {
      width: 100%;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }
  }
}
</style>
