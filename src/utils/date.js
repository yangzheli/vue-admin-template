/**
 * yyyy-MM-dd 格式或 yyyy-MM-dd HH:mm:ss 格式返回指定时间
 * @param {String} time 指定时间
 * @param {Boolean} complex 默认不包含 HH:mm:ss
 */
export const getTime = function (time, complex) {
  if (time === "") return null;
  let date = time ? new Date(time) : new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  let simpleTime = year + '-' + month + '-' + day,
    complexTime = year +
    "-" +
    month +
    "-" +
    day +
    " " +
    (h < 10 ? `0${h}` : h) +
    ":" +
    (m < 10 ? `0${m}` : m) +
    ":" +
    (s < 10 ? `0${s}` : s);
  return complex ? complexTime : simpleTime;
}