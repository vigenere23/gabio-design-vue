<template>
  <markdown-article class="markdown" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    'markdown-article': () => import(`@showcase/data/example.vue`)
  }
})
export default class Markdown extends Vue {}
</script>
