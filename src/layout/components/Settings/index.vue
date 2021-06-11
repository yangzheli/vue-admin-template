<template>
  <div :class="{openSetting:openSetting}" class="setting-container">
    <div class="drawer-mask"></div>
    <div class="handle-button" @click="openSetting = !openSetting">
      <svg-icon iconClass="404" :size="1"></svg-icon>
    </div>
    <items></items>
  </div>
</template>

<script>
import Items from "./Items.vue";

export default {
  components: {
    Items
  },
  data: function() {
    return {
      openSetting: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.setting-container {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  max-width: 260px;
  background: $settingsBg;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);

  .handle-button {
    width: 48px;
    height: 48px;
    position: absolute;
    left: -48px;
    text-align: center;
    font-size: 24px;
    border-radius: 6px 0 0 6px !important;
    pointer-events: auto;
    cursor: pointer;
    color: $handleButtonText;
    line-height: 48px;
    background: $handleButtonBg;
  }
}

.openSetting {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(0);

  .drawer-mask {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .setting-container {
    transform: translate(0);
  }
}
</style>