<template>
  <fa-icon :icon="computedIcon" class="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    brand: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedIcon() {
      return this.brand ? ['fab', this.icon] : this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0.9em;
}
</style>
