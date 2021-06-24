<template>
  <el-form :model="loginForm" :rules="activeName === 'first' ? accountLoginRules : phoneLoginRules" ref="loginForm">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="$t('login.accountLogin')" name="first">
        <div class="tab-item">
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="loginForm.username"
              :placeholder="$t('login.username')"
            >
              <template slot="prepend">
                <svg-icon iconClass="user" :size="1"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
        </div>

        <div class="tab-item">
          <el-form-item prop="password">
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
                  @click.native="hidden = !hidden"
                ></svg-icon>
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-tab-pane>

      <el-tab-pane :label="$t('login.phoneLogin')" name="second">
        <div class="tab-item">
          <el-form-item prop="phoneNumber">
            <el-input
              type="text"
              v-model="loginForm.phoneNumber"
              :placeholder="$t('login.phoneNumber')"
            >
              <template slot="prepend">
                <svg-icon iconClass="mobile" :size="1"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
        </div>

        <div class="tab-item">
          <el-form-item prop="verificationCode">
            <el-input
              v-model="loginForm.verificationCode"
              :placeholder="$t('login.verificationCode')"
            >
              <template slot="prepend">
                <svg-icon iconClass="sms" :size="1"></svg-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-button
            :class="{ 'disabled': getCodeDisabled }"
            type="primary"
            @click="getCode"
            :disabled="getCodeDisabled"
            >{{ $t("login.getCode") }}</el-button
          >
        </div>
      </el-tab-pane>
    </el-tabs>

    <div class="form-item">
      <el-checkbox v-model="checked">{{
        $t("login.rememberPassword")
      }}</el-checkbox>
      <a href="#/retrieve" target="_blank">
        <span>{{ $t("login.forgetPassword") }}</span>
      </a>
    </div>

    <div class="submit">
      <el-button @click="handleLogin">{{ $t("login.login") }}</el-button>
    </div>

    <sign-in-with></sign-in-with>

    <puzzle-panel
      v-if="puzzlePanelVisible"
      :puzzlePanelVisible="puzzlePanelVisible"
      @invisible="getValue"
    ></puzzle-panel>
  </el-form>
</template>

<script>
import PuzzlePanel from './PuzzlePanel.vue'
import SignInWith from './SignInWith.vue'

export default {
    components: {
        PuzzlePanel,
        SignInWith
    },
    data: function() {
        const validateUsername = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入用户名!'))
            else callback()
        }

        const validatePassword = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入密码!'))
            else callback()
        }

        /* eslint-disable */
        const validatePhone = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入手机号!'))
            else if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) { callback(new Error('手机号不合法!')) } else callback()
        }

        /* eslint-disable */
        const validateCode = (rule, value, callback) => {
            if (value === '') callback(new Error('请输入验证码!'))
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
            accountLoginRules: {
                username: [{ validator: validateUsername, trigger: 'blur' }],
                password: [{ validator: validatePassword, trigger: 'blur' }]

            },
            phoneLoginRules:{
                phoneNumber: [{ validator: validatePhone, trigger: 'blur' }],
                verificationCode: [{ validator: validateCode, trigger: 'blur' }]
            },
            hidden: true,
            getCodeDisabled: false,
            puzzlePanelVisible: false
        }
    },
    mounted: function () {
        window.addEventListener('keydown', this.keydown)
    },
    destroyed: function () {
        window.removeEventListener('keydown', this.keydown)
    },
    methods: {
        keydown: function (e) {
            // enter
            if (e.keyCode === 13) this.handleLogin()
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

        // login
        handleLogin: function () {
            let loginForm = this.loginForm
            let params = this.activeName === 'first' ? {
              loginType: 0,
              username: loginForm.username,
              password: loginForm.password
            } : { 
              loginType: 1,
              phoneNumber: loginForm.phoneNumber,
              verificationCode: loginForm.verificationCode
            }
            this.$refs.loginForm.validate(valid => {
                if (!valid) return false
                this.$api.user.login(params).then((res)=>{
                  this.puzzlePanelVisible = true
                })
            })
        },

        getValue: function (value) {
            this.puzzlePanelVisible = value
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.el-form {
  z-index: -1;
  width: 20rem;
  margin: 0 auto;
  text-align: left;

  .el-tabs {
    & /deep/ .el-tabs__nav-wrap::after {
      content: none;
    }

    .tab-item {
      display: flex;
      align-items: flex-start;

      .el-form-item {
        flex-basis: 99%;

        .el-input {
          flex-grow: 1;
          border: 1px solid #d9d9d9;

          & /deep/ .el-input-group__prepend,
          & /deep/ .el-input-group__append {
            padding: 0 0.5rem;
            background-color: #ffffff;
            border: none;
          }

          & /deep/ .el-input-group__append {
            svg {
              cursor: pointer;
            }
          }

          & /deep/ .el-input__inner {
            border: none;
          }
        }
      }

      button {
        margin-left: 1rem;
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
