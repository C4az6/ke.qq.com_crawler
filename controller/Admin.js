const { adminInfo } = require('../config/config'),
  { addAdminData, login } = require('../services/Admin'),
  { makeCrypto, trimSpace, returnInfo } = require('../libs/utils'),
  errorInfo = require('../config/error_config');
const { LOGIN } = require('../config/error_config');



class Admin {
  async createAdmin(ctx, next) {
    adminInfo.password = makeCrypto(adminInfo.password);
    const result = await addAdminData(adminInfo);
    if (result) {
      console.log('create admin account success.');
    } else {
      console.log('create admin failed!!!');
    }
  }

  // 用户登录
  async loginAction(ctx, next) {
    // 获取前端POST传递过来的参数
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      ctx.body = returnInfo(LOGIN.INVALIDE_OPERATION)
      return;
    }
    // 用户名长度不对
    if (trimSpace(username).length <= 0) {
      ctx.body = returnInfo(LOGIN.INVALIDE_USERNAME_LENGTH);
      return;
    }
    // 密码长度不对
    if (trimSpace(password).length <= 0) {
      ctx.body = returnInfo(LOGIN.INVALIDE_PASSWORD_LENGTH);
      return;
    }
    const userInfo = {
      username: trimSpace(username),
      password: makeCrypto(trimSpace(password))
    };
    const result = await login(userInfo);
    if (result === 10003) {
      ctx.body = returnInfo(LOGIN.USERNAME_NOT_EXIST)
      return
    }
    if (result === 10004) {
      ctx.body = returnInfo(LOGIN.PASSWORD_ERROR);
      return
    }

    if (!ctx.session.userInfo) {
      // 设置session
      ctx.session.userInfo = result;
    }

    // 登录成功，添加SESSION到返回的数据对象中
    ctx.body = returnInfo(LOGIN.SUCCESS)
  }

  // 获取登录状态
  async login_check(ctx, next) {
    if (ctx.session && ctx.session.userInfo) {
      // 已登录
      return (ctx.body = returnInfo(LOGIN.LOGIN_STATUS));
    }
    // 未登录
    ctx.body = returnInfo(LOGIN.NOT_LOGIN_STATUS)
  }
  // 用户退出登录
  async logout_action(ctx, next) {
    // 删除用户session的userInfo就可以实现退出登录了
    delete ctx.session.userInfo;
    ctx.body = returnInfo(LOGIN.LOGOUT_SUCCESS);
  }
}

module.exports = new Admin;