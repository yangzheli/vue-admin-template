<template>
  <div class="sign-in-with">
    <span>{{$t('login.loginInWith')}}</span>
    <button>
      <svg-icon iconClass="weixin" :size="1.5"></svg-icon>
    </button>

    <button>
      <svg-icon iconClass="qq" :size="1.5"></svg-icon>
    </button>
    <button>
      <svg-icon iconClass="weibo" :size="1.5"></svg-icon>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.sign-in-with {
  margin: 0.5rem 0;
  text-align: left;

  span{
    margin-right:1rem;
    vertical-align: top;
  }

  button {
    margin: 0 0.2rem;
    padding: 0;
    color: rgba(0, 0, 0, 0.2);
    border: none;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: $loginText;
    }
  }
}
</style>