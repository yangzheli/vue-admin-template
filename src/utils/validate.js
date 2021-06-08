// 数据校验封装
let strategies = {
  // 不能为空
  isNonEmpty: function (value, errorMsg) {
    if (value === null || value === "") return errorMsg;
  },

  // 限制最小长度
  minLength: function (value, length, errorMsg) {
    if (value.length < length) return errorMsg;
  },

  // 手机号码不为空时必须满足格式
  isMobile: function (value, errorMsg) {
    if (value !== null && value !== "" && !/(^1[3|5|8][0-9]{9}$)/.test(value)) return errorMsg;
  }
}

export const Validator = function () {
  this.cache = []; // 保存校验规则
}

Validator.prototype.add = function (value, rule, errorMsg) {
  let arr = rule.split(':'); // 将 strategy 和参数分开
  this.cache.push(function () {
    let strategy = arr.shift();
    arr.unshift(value);
    arr.push(errorMsg);
    let res = strategies[strategy].apply(value, arr)
    return res;
  })
}

Validator.prototype.start = function () {
  let cache = this.cache;
  for (let i = 0, validatorFunc; validatorFunc = cache[i++];) {
    var msg = validatorFunc(); // 执行添加的校验策略
    if (msg) return msg; // 有返回结果说明校验未通过
  }
}