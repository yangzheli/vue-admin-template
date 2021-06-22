<template>
  <el-form v-model="loginForm" :rules="loginRules">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="$t('login.accountLogin')" name="first">
        <div class="tab-item">
          <el-input type="text" v-model="loginForm.username" :placeholder="$t('login.username')">
            <template slot="prepend">
              <svg-icon iconClass="user" :size="1"></svg-icon>
            </template>
          </el-input>
        </div>

        <div class="tab-item">
          <el-input
            :type="hidden ? 'password' : 'text'"
            v-model="loginForm.password"
            :placeholder="$t('login.password')"
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
        </div>
      </el-tab-pane>

      <el-tab-pane :label="$t('login.phoneLogin')" name="second">
        <div class="tab-item">
          <el-input
            type="text"
            v-model="loginForm.phoneNumber"
            :placeholder="$t('login.phoneNumber')"
          >
            <template slot="prepend">
              <svg-icon iconClass="mobile" :size="1"></svg-icon>
            </template>
          </el-input>
        </div>

        <div class="tab-item">
          <el-input
            v-model="loginForm.verificationCode"
            :placeholder="$t('login.verificationCode')"
          >
            <template slot="prepend">
              <svg-icon iconClass="sms" :size="1"></svg-icon>
            </template>
          </el-input>

          <el-button
            :class="{'disabled':getCodeDisabled}"
            type="primary"
            v-on:click="getCode"
            :disabled="getCodeDisabled"
          >{{$t('login.getCode')}}</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div class="form-item">
      <el-checkbox v-model="checked">{{$t('login.rememberPassword')}}</el-checkbox>
      <a href="#/retrieve" target="_blank">
        <span>{{$t('login.forgetPassword')}}</span>
      </a>
    </div>

    <div class="submit">
      <el-button v-on:click="login">{{$t('login.login')}}</el-button>
    </div>

    <sign-in-with></sign-in-with>
  </el-form>
</template>

<script>
import SignInWith from './SignInWith.vue'

export default {
    components: {
        SignInWith
    },
    data () {
        const validateUsername = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入用户名!'))
            else callback()
        }

        const validatePassword = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入密码!'))
            else callback()
        }

        return {
            activeName: 'first',
            checked: true,
            loginForm: {
                username: '',
                password: '',
                phoneNumber: '',
                verificationCode: ''
            },
            loginRules: {
                username: [{ validator: validateUsername, trigger: 'blur' }],
                password: [{ validator: validatePassword, trigger: 'blur' }]
            },
            hidden: true,
            getCodeDisabled: false
        }
    },
    mounted: function () {
        window.addEventListener('keydown', this.keydown)
        this.draw()
    },
    destroyed: function () {
        window.removeEventListener('keydown', this.keydown)
    },
    methods: {
    // Enter 触发登录方法
        keydown: function (e) {
            if (e.keyCode === 13) this.login()
        },

        // 绘制图形验证码
        draw: function () {
            // const canvas = document.getElementById("canvas");
            // this.generateCode = verifyCode(canvas);
        },

        getCode: function () {
            const _this = this

            // 定时器，倒计时 60s
            let time = 60
            let timer = null
            timer = setInterval(function () {
                if (time === 0) {
                    _this.getCodeDisabled = false
                    clearInterval(timer) // 清除定时器
                } else {
                    _this.getCodeDisabled = true
                    time--
                }
            }, 1000)
        },

        // 登录
        login: function () {}
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.el-form {
  width: 20rem;
  margin: 0 auto;
  text-align: left;

  .el-tabs {
    & /deep/ .el-tabs__nav-wrap::after {
      content: none;
    }

    .tab-item {
      display: flex;

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

      button {
        margin: 0.5rem 0 0.5rem 1rem;
      }
    }
  }

  .form-item {
    margin: 0.5rem 0;

    a {
      float: right;
      color: $loginText;
      font-size: 14px;
      text-decoration: none;
    }
  }

  .submit {
    button {
      width: 100%;
      margin: 0.5rem 0;
      color: #ffffff;
      background: $loginText;
      border: 1px solid $loginText;
      font-size: 1.2rem;
    }
  }
}
</style>
