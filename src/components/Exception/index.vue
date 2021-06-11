<template>
  <div class="app-container">
    <svg-icon :iconClass="iconClass" :size="32"></svg-icon>
    <a href>
      <el-button type="primary">回到首页</el-button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
  transform: translate(-50%, 0);

  svg,
  a {
    display: block;
  }

  svg {
    padding: 1rem;
  }
}
</style>