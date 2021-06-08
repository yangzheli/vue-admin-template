/**
 * 计算两个数字或字符串数字之和，结果保留小数点后两位
 * @param {Number | String} s1 
 * @param {Number | String} s2 
 */
export const add = function (s1, s2) {
  let n1 = Number(s1),
    n2 = Number(s2);
  return (n1 + n2).toFixed(2);
}

/**
 * 格式化百分数，如果有小数部分，则保留小数点后一位
 * @param {Number | String} s 
 */
export const formatePercentage = function(s){
  let n = Number(s);
  return s.toString().indexOf(".") !== -1
  ? Number(n.toFixed(1))
  : n;
}