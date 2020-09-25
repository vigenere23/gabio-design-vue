<template>
  <div class="gio-code-block">
    <div class="gio-code-block__top-bar">
      <div class="gio-code-block__top-bar__window-buttons">
        <div class="gio-code-block__top-bar__window-buttons__red" />
        <div class="gio-code-block__top-bar__window-buttons__yellow" />
        <div class="gio-code-block__top-bar__window-buttons__green" />
      </div>
      <GioText dark type="secondary" class="gio-code-block__top-bar__language">
        {{ language }}
      </GioText>
    </div>

    <template v-if="language">
      <prism :language="language">{{ decodedCode }}</prism>
    </template>
    <template v-else>
      <pre><code>{{ decodedCode }}</code></pre>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import GioText from '@/vue/components/typography/Text.vue'

const Props = Vue.extend({
  props: {
    language: {
      type: String,
      required: false
    },
    code: {
      type: String,
      required: true
    }
  }
})

@Component({
  name: 'GioCodeBlock',
  components: { GioText }
})
export default class GioCodeBlocks extends Props {
  get decodedCode(): string {
    return decodeURI(this.code)
  }
}
</script>

<style lang="scss">
@import '~@/lib/styles/code-themes/one-dark-prism';
@import '~@/lib/styles/fonts';
@import '~@/lib/styles/colors';
@import '~@/lib/styles/sizes';

.gio-code-block {
  font-size: 3.5rem;
  overflow: hidden;
  border-radius: $border-radius-medium;
  @include text-margin;

  &__top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background-color: $accent-dark;
    color: $primary-text-light;
    text-align: left;

    &__window-buttons {
      display: flex;

      > * {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 0 4px;
      }

      &__red {
        background-color: hsl(355, 65%, 65%);
      }

      &__yellow {
        background-color: hsl(39, 67%, 69%);
      }

      &__green {
        background-color: hsl(95, 38%, 62%);
      }
    }

    &__language {
      font-size: 3.5rem;
    }
  }
}
</style>
