<template>
  <div class="cards">
    <GioHeading :dark="dark" :level="1">GioCard</GioHeading>
    <div class="cards__container">
      <GioCard
        :dark="dark"
        title="Some project"
        :tags="['fullstack', 'typescript', 'design']"
        desc="Lorem Ipsum adanis consta esperiamus dela is rectura parametra uvtile càsa tu"
        href="https://google.com"
        image="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
        imageSize="cover"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Darkable } from '../../src/lib/mixins/darkable'
import { Component } from 'vue-property-decorator'

@Component
export default class Cards extends Darkable {}
</script>

<style lang="scss">
.cards {
  &__container {
    display: flex;
    justify-content: center;
  }
}
</style>
