<template>
  <GioButton class="back-button" :dark="dark" @click="$router.go(-1)">
    <GioFaIcon icon="arrow-left"></GioFaIcon>
    <span>Back</span>
  </GioButton>
</template>

<script lang="ts">
// import { Darkable } from '../../../lib/gio/mixins/darkable'
import { Darkable } from '../../src/mixins/darkable'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component
export default class Test extends mixins(Darkable) {}
</script>
