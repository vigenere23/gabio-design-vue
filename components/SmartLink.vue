<template>
  <component
    :is="component"
    :to="toProperty"
    :href="hrefProperty"
    :target="targetProperty"
    :event="event"
    :append="shouldAppend"
    @click="$emit(event)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: String,
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    component () {
      return this.href
        ? this.isRelativeLink ? 'router-link' : 'a'
        : 'div'
    },
    targetProperty () {
      return !this.disable && this.href && !this.isRelativeLink ? '_blank' : undefined
    },
    hrefProperty () {
      return !this.disable && !this.isRelativeLink ? this.href : undefined
    },
    toProperty () {
      return this.isRelativeLink
        ? this.disable ? '' : this.href
        : undefined
    },
    event () {
      return this.disable ? '' : 'click'
    },
    isRelativeLink () {
      return /^\.?\//.test(this.href)
    },
    shouldAppend () {
      return this.isRelativeLink ? /^\.\//.test(this.href) : undefined
    }
  }
}
</script>
