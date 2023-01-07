// 返回给前端的错误信息配置文件
module.exports = {
  // 登录模块
  LOGIN: {
    INVALIDE_USERNAME_LENGTH: {
      error_code: 10001,
      error_msg: '用户名长度错误'
    },
    INVALIDE_PASSWORD_LENGTH: {
      error_code: 10002,
      error_msg: '密码长度错误'
    },
    USERNAME_NOT_EXIST: {
      error_code: 10003,
      error_msg: '用户名不存在'
    },
    PASSWORD_ERROR: {
      error_code: 10004,
      error_msg: '密码错误!'
    },
    INVALIDE_OPERATION: {
      error_code: 10005,
      error_msg: 'Invalid Operation'
    },
    NOT_LOGIN_STATUS: {
      error_code: 10006,
      error_msg: '未登录'
    },
    LOGIN_STATUS: {
      error_code: 10007,
      error_msg: '已登录'
    },
    LOGOUT_SUCCESS: {
      error_code: 0,
      error_msg: '退出登录成功'
    },
    SUCCESS: {
      error_code: 0,
      error_msg: '登录成功'
    }
  },
  // 对数据CRUD的API模块
  API: {
    RETURN_SUCCESS: {
      error_code: 0,
      error_msg: 'ok'
    },
    RETURN_FAILED: {
      error_code: 20001,
      error_msg: 'error'
    },
    CHANGE_COURSE_FIELD_SUCCESS: {
      error_code: 0,
      error_msg: '修改课程分类成功'
    },
    CHANGE_COURSE_FIELD_FAILED: {
      error_code: 20002,
      error_msg: '修改课程分类失败'
    }
  }
}