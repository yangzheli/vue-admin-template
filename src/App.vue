 <template>
  <router-view></router-view>
</template>

<script>
export default {
  created: function() {
    // 对路由进行拦截
    this.$router.beforeEach((to, from, next) => {
      let level = this.$store.state.level,
        token = this.$store.state.token;
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (level !== 1) next("/login");
        else next();
      } else {
        if (to.path === "/login") {
          next();
        } else if (!token || token === "") {
          next("/login");
        } else {
          next();
        }
      }
    });

    // 全局后置钩子
    this.$router.afterEach((to, from) => {
      let header = $("header")[0];
      if (!header) return;
      // 导航栏背景色设置
      if (to.path === "/home")
        header.style.background = "none";
      else header.style.background = "#04060d";
    });
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  div,
  p {
    cursor: default;
  }

  input {
    cursor: text;
  }

  select:disabled,
  input:disabled {
    cursor: not-allowed;
  }

  .search {
    position: fixed;
    top: 4.5em;
    right: 2em;
    z-index: 1001;
    cursor: text;

    .el-input__inner {
      min-width: 22em;
      color: #ffffff;
      background: #09172a;
      border: 1px solid #5a737d;
      border-radius: 2em;
      cursor: text !important;
    }

    .el-icon-search {
      color: #67b7fd;
    }

    .el-select-dropdown {
      color: #ffffff;
      background: #09172a;
      border: 1px solid #5a737d;
      right: 2em;
      left: auto !important;
      max-width: 18em;
    }

    .popper__arrow {
      left: 9em !important;

      &::after {
        border-bottom-color: #09172a !important;
      }
    }

    .el-select-dropdown__wrap {
      margin-bottom: -20px !important;
      margin-right: -20px !important;
    }
  }
}
</style>