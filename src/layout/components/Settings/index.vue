<template>
  <div ref="setting" :class="{ open: open }" class="setting-container">
    <div class="drawer-mask" @click="open = !open"></div>
    <div class="setting">
      <div class="handle-button" @click="open = !open">
        <svg-icon :iconClass="open ? 'close' : 'setting'" :size="1.5"></svg-icon>
      </div>
      <items></items>
    </div>
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
      open: false
    };
  },
  watch: {
    open: function(value) {
      const body = document.body;
      if (value) body.setAttribute("class", "openSetting");
      else body.removeAttribute("class", "openSetting");
    }
  },
  mounted: function() {
    this.insertToBody();
  },
  methods: {
    insertToBody: function() {
      const ele = this.$refs.setting;
      const body = document.body;
      body.insertBefore(ele, body.firstChild);
    }
  }
};
</script>

<style>
.openSetting {
  width: calc(100% - 17px);
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_mixin.scss";

.setting-container {
  .drawer-mask {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }

  .setting {
    position: fixed;
    z-index: 12;
    top: 0;
    right: 0;
    width: $settingsWidth;
    height: 100vh;
    background: $settingsBg;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.08);
    transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
    transform: translateX(100%);

    .handle-button {
      position: absolute;
      top: $handleButtonTop;
      left: -$handleButtonWidth;
      width: $handleButtonWidth;
      height: $handleButtonWidth;
      border-radius: 6px 0 0 6px;
      @include color("handleButtonText");
      @include background-color("handleButtonBg");
      line-height: 3.75rem;
      text-align: center;
      cursor: pointer;
    }
  }
}

.open {
  .drawer-mask {
    z-index: 11;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  .setting {
    transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transform: translateX(0);
  }
}
</style>
