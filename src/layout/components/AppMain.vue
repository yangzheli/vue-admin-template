<template>
  <section class="app-main">
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.app-main {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 3rem);
  @include color("appMainText");
  overflow: hidden;
}
</style>