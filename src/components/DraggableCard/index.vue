<!-- https://github.com/dwanda/dragComponent/blob/master/packages/card-dragger/src/card-dragger.vue -->
<template>
  <div @mousedown="startDrag">
    <slot name="content">
      <div>暂无内容</div>
    </slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mouseDownTimer: null
    };
  },
  methods: {
    startDrag: function(event, selectId) {
      if (this.mouseDownTimer) return false;

      // 若触发了点击事件，暴露一个方法
      this.$emit("startDrag", event, selectId);

      const _this = this;
      let dectetTimer = null;

      let originTop = document.body.scrollTop
          ? document.body.scrollTop
          : document.documentElement.scrollTop,
        scrollTop = originTop;

      // 记录鼠标移动的距离
      let moveTop = 0,
        moveLeft = 0;

      // 起始组件位置
      let originObjPosition = {
        left: 0,
        top: 0,
        originNum: -1
      };
      // 起始鼠标位置
      let OriginMousePosition = {
        x: 0,
        y: 0
      };

      // 记录交换位置的号码
      let oldPosition = null,
        newPosition = null;

      // 选中的卡片 DOM 和数据
      let selectDom = document.getElementById(selectId);
      // let selectMenuData = this.data.find(item =>{
      //   return item.id === selectId;
      // });

      OriginMousePosition.x = event.screenX;
      OriginMousePosition.y = event.screenY;

      selectDom.classList.add("d_moveBox");
      moveLeft = OriginObjPosition.left = parseInt(
        selectDom.style.left.slice(0, selectDom.style.left.length - 2)
      );
      moveTop = OriginObjPosition.top = parseInt(
        selectDom.style.top.slice(0, selectDom.style.top.length - 2)
      );

      document.addEventListener('mousemove',mouseMoveListener);
      document.addEventListener('mouseup',mouseUpListener);
      document.addEventListener('scroll',mouseScroll);
    }
  }
};
</script>