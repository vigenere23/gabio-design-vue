<template>
  <GioWebPage class="not-found" full-height>
    <GioSection class="not-found__section">
      <GioContent class="not-found__content">
        <GioTitle no-margin fontSize="35rem">404</GioTitle>
        <GioSubtitle>This page was not found</GioSubtitle>
        <div class="not-found__links">
          <GioButton dark href="/">
            <GioIcon icon="arrow-left"></GioIcon>
            <span>Back</span>
          </GioButton>
        </div>
      </GioContent>
    </GioSection>
  </GioWebPage>
</template>

<style lang="scss">
.not-found {
  &__section {
    height: 100%;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__links {
    display: flex;
    justify-content: center;
  }
}
</style>
