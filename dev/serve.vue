<script lang="ts">
import Vue from 'vue';
import Test from './components/Test'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Test
  }
});
</script>

<template>
  <div id="app">
    <GioSample />
    <GioSection dark>
      <GioCodeBlock language="js" code="import * from dark;"></GioCodeBlock>
      <Test></Test>
    </GioSection>
  </div>
</template>

<style lang="scss">
html {
  font-size: 4px;
}
</style>
