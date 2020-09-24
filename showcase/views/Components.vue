<template>
  <div class="components">
    <GioSection :dark="dark">
      <GioContent width="900px">
        <GioTitle :dark="dark">gio-library component showcase</GioTitle>
        <div class="components__dark-selector">
          <div>
            <GioBodyText :dark="dark">
              <input type="radio" id="light" :value="false" v-model="dark" />
              <label for="light">light</label>
            </GioBodyText>
          </div>
          <div>
            <GioBodyText :dark="dark">
              <input type="radio" id="dark" :value="true" v-model="dark" />
              <label for="dark">dark</label>
            </GioBodyText>
          </div>
        </div>
        <br />
        <Typography :dark="dark"></Typography>
        <Buttons :dark="dark"></Buttons>
        <Cards :dark="dark"></Cards>
        <Images :dark="dark"></Images>
        <Containers :dark="dark"></Containers>
      </GioContent>
    </GioSection>
    <GioSection v-if="showMarkdownSection">
      <GioContent width="900px">
        <Markdown></Markdown>
      </GioContent>
    </GioSection>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import {
  GioBodyText,
  GioSection,
  GioContent,
  GioTitle
} from '../../src/vue/components'

@Component({
  components: { GioBodyText, GioSection, GioContent, GioTitle }
})
export default class Components extends Vue {
  dark = false
  get showMarkdownSection(): boolean {
    // return false
    return process.env.NODE_ENV !== 'production'
  }
}
</script>

<style lang="scss">
.components {
  &__dark-selector {
    display: flex;
    align-items: center;

    > * {
      margin-right: 4rem;

      > * {
        display: flex;
        align-items: center;
      }
    }

    input {
      margin: 0;
      margin-right: 1rem;
    }
  }
}
</style>
