<template>
  <svg class="svg-icon" :style="{ '--size': `${size}` + 'rem' }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconClass: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 1
        }
    },
    computed: {
        iconName: function() {
            return `#icon-${this.iconClass}`
        }
    }
}
</script>

<style lang="scss" scoped>
$iconSize: var(--size);

.svg-icon {
  width: $iconSize;
  height: $iconSize;
  fill: currentColor;
  overflow: hidden;
}
</style>
