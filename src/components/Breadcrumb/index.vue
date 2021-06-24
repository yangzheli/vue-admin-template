<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">
      <span v-if="index === breadcrumbList.length - 1">{{item.meta.title}}</span>
      <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    data: function() {
        return {
            breadcrumbList: null
        }
    },
    watch: {
        $route: function(route) {
            this.getBreadcrumb()
        }
    },
    created: function() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb: function() {
            let matched = this.$route.matched.filter(
                item => item.meta && item.meta.title
            )
            const menu = matched[0]
            if (this.isDashBoard(menu)) { matched = [{ path: '/', meta: { title: 'Home' }}] } else matched = [{ path: '/', meta: { title: 'Home' }}].concat(matched)

            this.breadcrumbList = matched.filter(
                item => item.meta && item.meta.title
            )
        },

        isDashBoard: function(route) {
            const title = route.meta && route.meta.title
            if (!title) return false
            return title.trim().toLowerCase() === 'Dashboard'.toLowerCase()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.el-breadcrumb__inner {
  a {
    font-weight: 500;
    @include color("navbarText");
  }

  a:hover {
    @include color("navbarHoverText");
  }

  span {
    font-weight: 400;
    @include color("navbarLastText");
  }
}
</style>
