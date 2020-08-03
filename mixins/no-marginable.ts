export default {
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
}
