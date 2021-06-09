<template>
  <section class="app-main">
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 3rem);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>