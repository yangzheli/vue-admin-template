<template>
  <div class="login-container">
    <div class="login-lang">
      <el-dropdown placement="bottom" @command="clickDropdown">
        <svg-icon iconClass="language" :size="1.5"></svg-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="CN">中文</el-dropdown-item>
            <el-dropdown-item command="EN">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <div class="login-content">
      <div class="login-header">
        <p>Vue Design</p>
      </div>

      <div class="login-main">
        <login-form></login-form>
      </div>
    </div>

    <div class="login-footer">Vue design</div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'

export default {
    components: {
        LoginForm
    },
    methods: {
        clickDropdown: function (lang) {
            localStorage.lang = lang
            this.$i18n.locale = lang
        }
    }
}
</script>

<style lang="scss" scope>
.login-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/login-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;

  .login-lang {
    color: rgba(0, 0, 0, 0.65);
    text-align: right;

    svg {
      margin-right: 1rem;
      padding: 1rem;
      cursor: pointer;
    }
  }

  .login-content {
    flex: 1;
    margin: 2rem 0;

    .login-header {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;

      p {
        margin: 0 0 1rem 0;
      }
    }
  }

  .login-footer {
    margin: 2rem 0;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    letter-spacing: 0.1rem;
  }
}
</style>
