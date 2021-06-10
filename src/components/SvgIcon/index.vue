<template>
  <svg :class="size" class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "small",
      validator(value) {
        return ["small", "middle", "large"].includes(value);
      }
    }
  },
  computed: {
    iconName: function() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
  overflow: hidden;
}

.middle {
  width: 1.5rem;
  height: 1.5rem;
}

.large {
  width: 2rem;
  height: 2rem;
}
</style>
