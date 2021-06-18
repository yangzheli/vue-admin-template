/**
 * @param {Object} canvas 绘制验证码的 canvas 对象
 * @param {Number} codeCount 验证码字母或数字个数
 * @param {Number} lineCount 线条数量
 * @param {Number} spotCount 斑点数量
 */
export const verifyCode = function (canvas, codeCount, lineCount, spotCount) {
  if (!(canvas && canvas.getContext)) return null;

  // 随机生成的验证码
  let res = [];

  codeCount = codeCount || 4; // codeCount 默认为 4
  lineCount = lineCount || 5; // lineCount 默认为 5
  spotCount = spotCount || 30; // spotCount 默认为 30

  const context = canvas.getContext("2d");
  const WIDTH = 100,
    HEIGHT = 40;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  // 去掉数字 1 I i，不容易区分
  const code = ["0", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

  // 绘制字母或数字
  for (let i = 0, len = code.length; i < codeCount; i++) {
    const index = Math.floor(Math.random() * len), // 获取到随机的索引值
      deg = (Math.random() * 30 * Math.PI) / 180; // 产生 0 ~ 30 之间的随机弧度
    const txt = code[index];
    res.push(txt);

    const x = 10 + i * 20,
      y = 20 + Math.random() * 8;

    context.font = "bold 23px 微软雅黑";
    context.translate(x, y);
    context.rotate(deg);

    context.fillStyle = randomColor();
    context.fillText(txt, 0, 0);

    context.rotate(-deg);
    context.translate(-x, -y);
  }

  // 绘制线条
  for (var i = 0; i < lineCount; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    context.moveTo(
      Math.random() * WIDTH,
      Math.random() * HEIGHT
    );
    context.lineTo(
      Math.random() * WIDTH,
      Math.random() * HEIGHT
    );
    context.stroke();
  }

  // 绘制斑点
  for (var i = 0; i < spotCount; i++) {
    context.strokeStyle = randomColor();
    context.beginPath();
    const x = Math.random() * WIDTH,
      y = Math.random() * HEIGHT;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.stroke();
  }

  return res;
}

// 得到随机的颜色值
const randomColor = function () {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}