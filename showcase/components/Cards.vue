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
      >
        <template v-slot:image>
          <GioImage
            src="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
            objectFit="cover"
          />
        </template>
        <template v-slot:actions>
          <GioButton
            size="small"
            :dark="!dark"
            no-margin-right
            href="https://google.com"
          >
            <span>details</span>
            <GioIcon
              icon="external-link-alt"
              class="gio-card__button-details__icon"
            ></GioIcon>
          </GioButton>
        </template>
      </GioCard>
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
