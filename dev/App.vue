<script lang="ts">
import Vue from 'vue'
import Test from './components/Test.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Test
  }
})
</script>

<template>
  <div id="app">
    <GioSection>
      <GioContent>
        <GioHeading :level="1">Component showcase</GioHeading>
        <Test></Test>
        <GioCodeBlock
          language="js"
          code="import gio from '@vigenere23/gio';"
        ></GioCodeBlock>
        <GioButton dark size="small"><span>Hello world</span></GioButton>
        <GioButton dark><span>Hello world</span></GioButton>
      </GioContent>
    </GioSection>
    <GioSection dark>
      <GioContent>
        <GioCard></GioCard>
      </GioContent>
    </GioSection>
  </div>
</template>

<style lang="scss">
html {
  font-size: 4px;
}
</style>
