<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuHoverText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :basePath="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/_variables.scss'

export default {
    /* eslint-disable */
  components: {
    Item,
    SidebarItem
  },
  computed: {
    ...mapGetters(["sidebar"]),
    // It doesn't work! Strange!
    variables() {
      return variables;
    },
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) return meta.activeMenu;
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_mixin.scss";

.el-menu {
  @include color("menuText");
  @include background_color("menuBg");
  border: none;

  & /deep/ .el-menu-item {
    @include color("menuText");

    &:hover {
      @include color("menuHoverText");
      @include background_color("menuBg");
    }

    &:active,
    &:focus {
      @include color("menuHoverText");
      @include background-color("menuHoverBg");
    }
  }

  & /deep/ .el-menu-item.is-active {
    @include color("menuHoverText");
    @include background-color("menuHoverBg");
  }

  & /deep/ .el-submenu__title {
    @include color("menuText");

    &:hover {
      @include color("menuHoverText");
      @include background-color("menuBg");
    }

    &:active,
    &:focus {
      @include color("menuHoverText");
      @include background-color("menuHoverBg");
    }
  }

  & /deep/ .el-menu {
    @include background-color("subMenuBg");

    .el-menu-item {
      &:hover {
        @include color("menuHoverText");
        @include background-color("subMenuBg");
      }

      &:active,
      &:focus {
        @include color("menuHoverText");
        @include background-color("submenuHoverBg");
      }
    }
  }
}

.el-menu--collapse {
  width: 3.5rem;

  & /deep/ .el-submenu__title {
    span {
      display: none;
    }

    .el-submenu__icon-arrow {
      display: none;
    }
  }
}
</style>
