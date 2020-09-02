import Vue from 'vue'

export const NoMarginable = Vue.extend({
  props: {
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      noMarginClass: {
        'no-margin': this.noMargin
      }
    }
  }
})
