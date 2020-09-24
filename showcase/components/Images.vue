<template>
  <div class="images">
    <GioHeading :dark="dark" :level="1">GioCaptionedImage</GioHeading>
    <GioBodyText :dark="dark">
      To display an image with its caption beneath, plus with adjustable width.
    </GioBodyText>
    <GioCaptionedImage
      :dark="dark"
      :srcs="[
        'https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png'
      ]"
      caption="A captioned image"
      width="50%"
      lazy
    ></GioCaptionedImage>

    <GioHeading :dark="dark" :level="1">GioImage</GioHeading>
    <GioBodyText :dark="dark">
      To display a block image. with its
      <GioInlineCode :dark="dark">title</GioInlineCode> and
      <GioInlineCode :dark="dark">alt</GioInlineCode> properties filled.
    </GioBodyText>
    <GioImage
      class="images__smaller-image"
      :srcs="[
        'https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png'
      ]"
      lazy
    ></GioImage>

    <GioHeading :dark="dark" :level="2">Image description</GioHeading>
    <GioBodyText :dark="dark">
      The
      <GioInlineCode :dark="dark">description</GioInlineCode>
      property fills the
      <GioInlineCode :dark="dark">title</GioInlineCode> and
      <GioInlineCode :dark="dark">alt</GioInlineCode> attributes.
    </GioBodyText>
    <GioImage
      class="images__smaller-image"
      :srcs="[
        'https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png'
      ]"
      description="An image description, adding SEO, screen reading and tooltip"
      lazy
    ></GioImage>

    <GioHeading :dark="dark" :level="2">Image containement</GioHeading>
    <GioBodyText :dark="dark">
      You can specify an
      <GioInlineCode :dark="dark">objectFit</GioInlineCode> property so it acts
      like a background <GioInlineCode :dark="dark">contain</GioInlineCode> or
      <GioInlineCode :dark="dark">cover</GioInlineCode> image.
    </GioBodyText>

    <div class="images__list">
      <div class="images__list__container">
        <GioText :dark="dark">contain</GioText>
        <div class="images__list__image-wrapper">
          <GioImage
            class="images__list__image images__list__image_border images__list__image_absolute"
            :srcs="[
              'https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png'
            ]"
            objectFit="contain"
            lazy
          ></GioImage>
        </div>
      </div>
      <div class="images__list__container">
        <GioText :dark="dark">cover</GioText>
        <div class="images__list__image-wrapper">
          <GioImage
            class="images__list__image images__list__image_border images__list__image_absolute"
            :srcs="[
              'https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png'
            ]"
            objectFit="cover"
            lazy
          ></GioImage>
        </div>
      </div>
    </div>

    <GioCaption
      >Borders have been added to show image container's dimensions</GioCaption
    >

    <GioHeading :dark="dark" :level="2">Lazy loading</GioHeading>
    <GioBodyText :dark="dark">
      You can add the
      <GioInlineCode :dark="dark">lazy</GioInlineCode> property to lazy-load the
      image.
    </GioBodyText>

    <GioHeading :dark="dark" :level="2">Multiple sources</GioHeading>
    <GioBodyText :dark="dark">
      The
      <GioInlineCode :dark="dark">srcs</GioInlineCode> property always takes an
      array so you can provide additionnal sources for an image. This is usefull
      for using different formats or responsive sizes.
    </GioBodyText>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'

@Component
export default class Images extends Darkable {}
</script>

<style lang="scss">
@import '../../src/lib/styles/colors';

.images {
  &__smaller-image {
    width: 500px;
    max-width: 100%;
    margin: auto;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &__container {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__image-wrapper {
      width: 100%;
      position: relative;

      &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
    }

    &__image {
      width: 100%;

      &_absolute {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }

      &_border {
        border: solid 2px $accent-dark;
      }
    }
  }
}
</style>
