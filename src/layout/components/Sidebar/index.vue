<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :basePath="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Item from "./Item.vue";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.scss";

export default {
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
@import "@/styles/variables.scss";

.el-menu {
  color: $menuText;
  background: $menuBg;
  border: none;

  & /deep/ .el-menu-item {
    color: $menuText;

    &:hover,
    &:active,
    &:focus {
      color: $menuActiveText;
      background: $menuHover;
    }
  }

  & /deep/ .el-menu-item.is-active {
    color: $menuActiveText;
    background: $menuHover;
  }

  & /deep/ .el-submenu__title {
    color: $menuText;

    &:hover,
    &:active,
    &:focus {
      color: $menuActiveText;
      background: $menuHover;
    }
  }

  & /deep/ .el-menu {
    background: $subMenuBg;

    .el-menu-item {
      &:hover,
      &:active,
      &:focus {
        color: $menuActiveText;
        background: $subMenuHover;
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