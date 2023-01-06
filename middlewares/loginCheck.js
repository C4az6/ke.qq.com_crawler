const { returnInfo } = require('../libs/utils'),
  { LOGIN } = require('../config/error_config')


// 导出异步函数
module.exports = async (ctx, next) => {
  if (ctx.session.userInfo) {
    // 通过session.userInfo 判断用户是否登录,如果next()不执行,后面的中间件是不会执行的
    await next();
    return;
  }
  ctx.body = returnInfo(LOGIN.NOT_LOGIN_STATUS);
}