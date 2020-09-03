<template>
  <div id="app">
    <GioSection>
      <GioContent>
        <GioHeading :level="1">Component showcase</GioHeading>
        <Test></Test>
        <GioCard
          title="Some project"
          :tags="['fullstack', 'typescript', 'design']"
          desc="Lorem Ipsum adanis consta esperiamus dela is rectura parametra uvtile càsa tu"
          href="https://google.com"
          image="https://user-images.githubusercontent.com/32545895/72564049-efe3b800-387c-11ea-888b-5c1cd3745b61.png"
          imageSize="cover"
        />
        <GioHeading dark>
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
