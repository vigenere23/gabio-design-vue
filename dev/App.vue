<template>
  <div id="app">
    <GioSection>
      <GioContent>
        <GioHeading :level="1">Component showcase</GioHeading>
        <Test></Test>
        <GioBaseText dark>
          <GioTag>interface</GioTag>
          <GioTag>interface</GioTag>
          <GioTag>interface</GioTag>
        </GioBaseText>
        <GioHeading dark>
          <GioTag>interface</GioTag>
          <GioTag>interface</GioTag>
          <GioTag>interface</GioTag>
        </GioHeading>
        <GioCodeBlock
          language="js"
          code="import gio from '@vigenere23/gio';"
        ></GioCodeBlock>
        <GioButton dark size="small">
          <span>Hello world</span>
          <GioIcon icon="envelope"></GioIcon>
        </GioButton>
        <GioButton dark><span>Hello world</span></GioButton>
      </GioContent>
    </GioSection>
    <GioSection dark>
      <GioContent> </GioContent>
    </GioSection>
  </div>
</template>

<style lang="scss">
html {
  font-size: 4px;
}
</style>
