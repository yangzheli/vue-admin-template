const Mock = require('mockjs');

// 设置拦截 ajax 请求的时间
Mock.setup({
  timeout: '200-600'
});
