<template>
  <div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
    >
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <Item iconClass="dashboard" title="Dashboard"></Item>
        </el-menu-item>
      </router-link>

      <router-link to="/form/index">
        <el-menu-item index="2">
          <Item iconClass="form" title="Form"></Item>
        </el-menu-item>
      </router-link>

      <router-link to="/exception">
        <el-menu-item index="3">
          <Item iconClass="exception" title="Exception"></Item>
        </el-menu-item>
      </router-link>

      <router-link to="/user">
        <el-menu-item index="4">
          <Item iconClass="user" title="User"></Item>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Item from "./Item.vue";
import variables from '@/styles/variables.scss';

export default {
  components: {
    Item
  },
  computed: {
    ...mapGetters(["sidebar"]),
    variables() {
      console.log(variables)
      return variables;
    },
    routes() {
      return this.$routes.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) return mea.activeMenu;
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>