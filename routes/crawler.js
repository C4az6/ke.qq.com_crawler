const router = require('koa-router')(),
  crawlerController = require('../controller/Crawler');

// 给路由增加前缀
router.prefix('/crawler');
// 这里的crawlerController是Crawler类的实例对象，因此可以直接调用实例方法
router.get('/crawl_slider_data', crawlerController.crawlSliderData);

module.exports = router
