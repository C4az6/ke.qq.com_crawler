const router = require('koa-router')(),
  indexController = require('../controller/Index');

router.get('/', indexController.index)

module.exports = router