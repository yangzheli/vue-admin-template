<template>
  <div class="drawer-container">
    <h3>Page Style Setting</h3>

    <div class="drawer-item">
      <span>Dark Style</span>
      <el-switch v-model="darkStyle"></el-switch>
    </div>

    <h3>Theme Color</h3>
  </div>
</template>

<script>
const body = document.body;

export default {
  computed: {
    darkStyle: {
      get: function() {
        let value = this.$store.state.settings.darkStyle;
        body.setAttribute("theme", value ? "dark" : "light");
        return value;
      },
      set: function(value) {
        this.$store.dispatch("settings/changeSetting", {
          key: "darkStyle",
          value: value
        });
        body.setAttribute("theme", value ? "dark" : "light");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.drawer-container {
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.75rem;
    font-size: 14px;
    @include color("itemsText");
  }

  .drawer-item {
    padding: 0.75rem 0;
    font-size: 14px;
    @include color("itemsText");

    .el-switch {
      float: right;
    }
  }
}
</style>