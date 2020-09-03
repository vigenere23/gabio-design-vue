import Vue from 'vue'

export const Darkable = Vue.extend({
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
})
