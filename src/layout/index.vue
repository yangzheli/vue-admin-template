<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div>
        <navbar></navbar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/AppMain.vue";
import ResizeMixin from "./mixin/ResizeHandler.js";

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    // ...mapGetters(["permission_routes"])
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    }
  },
  methods: {
    handleClickOutside: function() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
    left: 0;
  }

  .drawer-bg {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>