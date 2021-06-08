import {
  get,
  post,
  purePost,
  form,
  upload
} from '../utils/http.js'

var env = process.env.NODE_ENV;

const devBaseURL = {
    // user: "http://192.168.1.109:8080/web/user",
    // userManager: "http://192.168.1.109:8080/web/userManager",
    // log: "http://192.168.1.109:8080/web/log",
    // ass: "http://192.168.1.109:8080/web/ass",
    // landArea: "http://192.168.1.109:8080/web/landArea",
    // owner: 'http://192.168.1.109:8080/web/houseProperty',
    user: "http://w.e-scope.cn/tomcat1/berlinTown/user",
    userManager: "http://w.e-scope.cn/tomcat1/berlinTown/userManager",
    log: "http://w.e-scope.cn/tomcat1/berlinTown/log",
    ass: "http://w.e-scope.cn/tomcat1/berlinTown/ass",
    landArea:"http://w.e-scope.cn/tomcat1/berlinTown/landArea",
    owner: "http://w.e-scope.cn/tomcat1/berlinTown/houseProperty",
  },
  prodBaseURL = {
    user: "http://w.e-scope.cn/tomcat1/berlinTown/user",
    userManager: "http://w.e-scope.cn/tomcat1/berlinTown/userManager",
    log: "http://w.e-scope.cn/tomcat1/berlinTown/log",
    ass: "http://w.e-scope.cn/tomcat1/berlinTown/ass",
    landArea: "http://w.e-scope.cn/tomcat1/berlinTown/landArea",
    owner: 'http://w.e-scope.cn/tomcat1/berlinTown/houseProperty'
  },
  baseURL = env === 'production' ? prodBaseURL : devBaseURL;

const user = {
  // 用户登录接口
  login(params) {
    return purePost(`${baseURL.user}/login`, params);
  },
  // 退出接口
  logout(params) {
    return post(`${baseURL.user}/logout`, params);
  },
}

const userManager = {
  // 分页用户接口
  findByPage(params) {
    return post(`${baseURL.userManager}/findByPage`, params);
  },
  // 修改用户信息
  saveOrUpdate(params) {
    return post(`${baseURL.userManager}/saveOrUpdate`, params);
  },
}

const log = {
  // 分页查询日志接口
  findByPage(params) {
    return post(`${baseURL.log}/findByPage`, params);
  },
  // 查询全部模块类型接口
  findAllType(params) {
    return post(`${baseURL.log}/findAllType`, params);
  },
}

const ass = {
  // 查询地图房间对应调查编号信息
  findAss(params) {
    return post(`${baseURL.ass}/findAss`, params);
  },
}

const landArea = {
  // 根据地块编号查询
  findByNum(params) {
    return post(`${baseURL.landArea}/findByNum`, params);
  },
  // 修改地块信息
  saveOrUpdate(params) {
    return post(`${baseURL.landArea}/saveOrUpdate`, params);
  },
}

const owner = {
  // 分页列表接口
  findByPage(params) {
    return post(`${baseURL.owner}/findByPage`, params);
  },
  // 查询全部地块编号接口
  findAllLandNum() {
    return post(`${baseURL.owner}/findAllLandNum`);
  },
  // 新增、修改接口
  saveOrUpdate(params) {
    return form(`${baseURL.owner}/saveOrUpdate`, params);
  },
  // 删除接口
  delete(params) {
    return post(`${baseURL.owner}/delete`, params);
  },
  // 查询单条信息接口
  findById(params) {
    return post(`${baseURL.owner}/findById`, params);
  },
  // 文件上传接口
  uploadFile(params) {
    return upload(`${baseURL.owner}/uploadFile`, params);
  },
  // 文件打开、下载接口
  downloadFile(params) {
    return get(`${baseURL.owner}/downloadFile/${params}`);
  },
  // 文件导入接口
  import(params) {
    return upload(`${baseURL.owner}/import`, params);
  },
  // 根据调查编号查询信息接口
  findByExamineNum(params) {
    return get(`${baseURL.owner}/findByExamineNum`, params);
  },
  // 数据导出接口
  export (params) {
    return get(`${baseURL.owner}/export`, params);
  },
};

//导出接口
export default {
  baseURL,
  user,
  userManager,
  log,
  ass,
  landArea,
  owner
}