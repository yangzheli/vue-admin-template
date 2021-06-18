<template>
  <el-form v-model="loginForm" :rules="loginRules">
    <el-tabs v-model="activeName">
      <el-tab-pane label="账号密码登录" name="first">
        <el-input type="text" v-model="loginForm.username" placeholder="用户名：admin/user">
          <template slot="prepend">
            <svg-icon iconClass="user" :size="1"></svg-icon>
          </template>
        </el-input>

        <el-input
          :type="hidden ? 'password' : 'text'"
          v-model="loginForm.password"
          placeholder="密码：any string that satisfies the format"
        >
          <template slot="prepend">
            <svg-icon iconClass="password" :size="1"></svg-icon>
          </template>
          <template slot="append">
            <svg-icon
              :iconClass="hidden ? 'hidden' : 'visible'"
              :size="1"
              @click="hidden = !hidden"
            ></svg-icon>
          </template>
        </el-input>
      </el-tab-pane>

      <el-tab-pane label="手机号登录" name="second">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名">
          <template slot="prepend">
            <svg-icon v-if="hidden" iconClass="mobile" :size="1"></svg-icon>
          </template>
        </el-input>

        <el-input
          :type="hidden ? 'password' : 'text'"
          v-model="loginForm.password"
          placeholder="请输入密码"
        >
          <template slot="prepend">
            <svg-icon v-if="hidden" iconClass="sms" :size="1"></svg-icon>
          </template>
        </el-input>

        <el-button
          :class="{'disabled':phoneCodeDisabled}"
          type="primary"
          v-on:click="getPhoneCode"
          :disabled="phoneCodeDisabled"
        >{{phoneCodeMsg}}</el-button>
      </el-tab-pane>
    </el-tabs>

    <div class="form-item">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <a href="#/retrieve" target="_blank">
        <span>忘记密码？</span>
      </a>
    </div>

    <div class="submit">
      <el-button v-on:click="login">登录</el-button>
    </div>

    <div class="sign-in-with">
      <sign-in-with></sign-in-with>
    </div>
  </el-form>
</template>

<script>
import SignInWith from "./SignInWith.vue";

export default {
  components: {
    SignInWith
  },
  data() {
    return {
      activeName: "first",

      checked: true,

      loginForm: {
        username: "",
        password: ""
      },
      hidden: true,
      code: "",
      generateCode: []
      // rememberPassword: false,
    };
  },
  mounted: function() {
    window.addEventListener("keydown", this.keydown);
    this.draw();
  },
  destroyed: function() {
    window.removeEventListener("keydown", this.keydown);
  },
  methods: {
    // Enter 触发登录方法
    keydown: function(e) {
      if (e.keyCode === 13) this.login();
    },

    // 绘制图形验证码
    draw: function() {
      const canvas = document.getElementById("canvas");
      this.generateCode = verifyCode(canvas);
    },

    // 登录
    login: function(test) {
      let loginForm = this.loginForm;

      // 添加数据校验
      let validator = new Validator();
      validator.add(loginForm.username, "isNonEmpty", "用户名不能为空");
      validator.add(loginForm.password, "isNonEmpty", "密码不能为空");
      validator.add(
        this.code,
        `isEqualIngoreCase:${this.generateCode.join("")}`,
        "验证码错误"
      );
      let errorMsg = validator.start();
      if (errorMsg) {
        this.$message({
          message: errorMsg,
          type: "error"
        });
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 20rem;
  margin: 0 auto;

  .el-tabs {
    & /deep/ .el-tabs__nav-wrap::after {
      content: none;
    }
  }

  .el-input {
    margin: 0.5rem 0;
    border: 1px solid #d9d9d9;

    & /deep/ .el-input-group__prepend,
    & /deep/ .el-input-group__append {
      padding: 0 0.5rem;
      background-color: #ffffff;
      border: none;
    }

    & /deep/ .el-input__inner {
      border: none;
    }
  }

  .form-item {
    margin: 0.5rem 0;

    a {
      text-decoration: none;
    }
  }

  .submit {
  }
}
</style>