<template>
  <div class="login-container">
    <div class="login-lang"></div>

    <div class="login-content">
      <div class="login-header">
        <p class="en">Vue Design</p>
      </div>

      <div class="login-main">
        <login-form></login-form>
      </div>
    </div>

    <div class="login-footer">Vue design</div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import { Validator } from "@/utils/validate.js";
import { verifyCode } from "@/utils/verifyCode.js";

export default {
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scope>
.login-container {
  width: 10%;
  height: 10%;
  background-image: url("@/icons/svg/back.svg");
// background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1060px' height='580px' viewBox='0 0 1060 580' preserveAspectRatio='xMidYMid meet' ><rect id='svgEditorBackground' x='0' y='0' width='1060' height='580' style='fill: none; stroke: none;'/><rect x='115' y='111' stroke='black' id='e1_rectangle' style='stroke-width: 1px;' width='144' height='120' fill='khaki'/><polyline stroke='black' stroke-width='1' id='e2_polyline' style='fill: none;' points='115 109 187 69 257 109' /><text fill='black' x='257' y='33' id='e4_texte' style='font-family: Arial; font-size: 20px;'></text><rect x='179' y='19' stroke='black' id='e5_rectangle' style='stroke-width: 1px;' width='16' height='54' fill='khaki' /></svg>"); 
background-size: cover;
  background-repeat: no-repeat;

  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50em;
    height: 25em;
    padding: 5em;
    transform: translate(-50%, -50%);
    // background: url("@/assets/login-form-bg.png");
    background-size: 95% 100%;
    background-repeat: no-repeat;
    text-align: center;

    .login-title {
      p {
        text-align: center;
        background: linear-gradient(#fbfcff, #6987ef);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      .zh {
        font-size: 2em;
        margin: 0.5em 0;
        letter-spacing: 0.6em;
      }

      .en {
        font-size: 0.8em;
        margin: 0.5em 1em 2em 0;
        letter-spacing: 0.3em;
      }
    }

    .login-item {
      width: 50%;
      margin: 1em auto;

      canvas {
        position: relative;
        top: 0;
        left: 1.6em;
        border: 1px solid #707287;
        border-radius: 5px;
        cursor: pointer;
      }

      & >>> .el-input-group__prepend {
        width: 25px;
        padding: 0 0.5em;
        border: none;
        background-color: #ffffff;
      }

      & >>> .el-input__inner {
        border: none;
        font-size: 1.1em;
      }
    }

    .verify {
      margin-bottom: 0;

      .el-input {
        position: relative;
        top: -1.1em;
        left: -1.9em;
        width: 60%;
      }
    }

    .setting {
      margin-top: 0;
      color: #ffffff;

      & >>> .el-radio__label {
        color: #ffffff;
      }

      & a {
        color: #ffffff;
        text-decoration: none;

        span {
          margin-left: 20em;
          cursor: pointer;
        }

        span:hover {
          color: #3d58b5;
        }
      }
    }

    button {
      font-size: 1.2em;
      letter-spacing: 1.4em;
      padding: 0.6em 8em;
      color: #ffffff;
      background: #3d58b5;
      border: 1px solid #3d58b5;
    }
  }

  .login-footer {
    position: absolute;
    bottom: 2em;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.3em;
    color: #ffffff;
  }
}
</style>