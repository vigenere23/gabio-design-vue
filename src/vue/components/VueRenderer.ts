import Vue from 'vue'

export default Vue.component('GioVueRenderer', {
  props: {
    htmlString: {
      type: String,
      required: true
    }
  },
  render(h) {
    const renderer = {
      template: `<div>${this.htmlString}</div>`
    }
    return h(renderer)
  }
})
