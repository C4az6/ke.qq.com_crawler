// admin相关的路由模块
const router = require('koa-router')(),
  adminController = require('../controller/Admin');

// 添加路由前缀 /admin
router.prefix('/admin');
router.get('/createAdmin', adminController.createAdmin);

module.exports = router;