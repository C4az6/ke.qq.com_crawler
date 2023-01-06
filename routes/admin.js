// admin相关的路由模块
const router = require('koa-router')(),
  adminController = require('../controller/Admin');

// 添加路由前缀 /admin
router.prefix('/admin');
// router.get('/createAdmin', adminController.createAdmin);
router.post('/login_action', adminController.loginAction);
router.get('/login_check', adminController.login_check)

module.exports = router;