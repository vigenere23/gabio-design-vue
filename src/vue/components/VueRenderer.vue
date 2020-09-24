<template>
  <div :v-html="htmlString"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import * as components from '@/vue/components'

@Component({
  name: 'GioVueRenderer'
})
export default class GioVueRenderer extends Vue {
  @Prop({ type: String, required: true }) vueString!: string

  get htmlString(): string {
    console.log(this.vueString)
    const templateString = `<div>${this.vueString}</div>`
    const el = Vue.compile(templateString)
    const compiledHtml = new Vue({
      components: { ...components },
      render: el.render,
      staticRenderFns: el.staticRenderFns
    }).$mount()
    console.log(compiledHtml.$el.innerHTML)

    return compiledHtml.$el.innerHTML
  }
}
</script>
