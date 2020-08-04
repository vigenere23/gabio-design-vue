<template>
  <div class="code-block">
    <div class="code-block__top-bar">
      <div class="code-block__top-bar__window-buttons">
        <div class="code-block__top-bar__window-buttons__red" />
        <div class="code-block__top-bar__window-buttons__yellow" />
        <div class="code-block__top-bar__window-buttons__green" />
      </div>
      <GioBaseText dark type="secondary">
        {{ language }}
      </GioBaseText>
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

const CodeBlockProps = Vue.extend({
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

@Component
export default class CodeBlocks extends CodeBlockProps {
  get decodedCode(): string {
    return decodeURI(this.code)
  }
}
</script>

<style lang="scss">
@import '~@gio/styles/code-themes/one-dark-prism';
@import '~@gio/styles/fonts';
@import '~@gio/styles/colors';
@import '~@gio/styles/sizes';

.code-block {
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

    .base-text {
      font-size: 3.5rem;
    }
  }
}
</style>
