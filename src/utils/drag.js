/**
 * 使某个元素可拖拽
 * @param {Object} ele
 */
export const dragElement = function (ele) {
  if (!ele) return;
  
  let body = document.body;
  let dragable = false;
  let offsetLeft, // 上次鼠标点击位置到左边的距离
    offsetTop; // 上次鼠标点击位置到上边的距离
  ele.addEventListener("mousedown", e => {
    offsetLeft = e.clientX;
    offsetTop = e.clientY;
    dragable = true;
  });

  // 需要在body上监听移动事件，而不是被移动的元素上，否则移动得过快可能鼠标会滑出div，就移不动了
  body.addEventListener("mousemove", e => {
    if (dragable) {
      // 计算位移
      let dx = e.clientX - offsetLeft,
        dy = e.clientY - offsetTop,
        cx = ele.offsetLeft + dx,
        cy = ele.offsetTop + dy;
      ele.style.setProperty("left", cx + "px");
      ele.style.setProperty("top", cy + "px");

      offsetLeft = e.clientX;
      offsetTop = e.clientY;
    }
  });

  body.addEventListener("mouseup", e => {
    dragable = false;
  });
}