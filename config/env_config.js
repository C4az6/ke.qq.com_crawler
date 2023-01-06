// 配置环境变量，区分开发和生产环境
const ENV = process.env.NODE_ENV;
console.log("ENV: ", ENV);
module.exports = {
  isDev: ENV === 'dev',
  isPrd: ENV === 'production'
}