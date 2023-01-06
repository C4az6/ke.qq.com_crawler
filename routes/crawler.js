const router = require('koa-router')(),
  crawlerController = require('../controller/Crawler'),
  loginCheck = require('../middlewares/loginCheck')

// 给路由增加前缀
router.prefix('/crawler');
// 这里的crawlerController是Crawler类的实例对象，因此可以直接调用实例方法
router.get('/crawl_slider_data', loginCheck, crawlerController.crawlSliderData);
router.get('/crawl_agency_info', loginCheck, crawlerController.crawlAgencyInfo);
router.get('/crawl_recom_course', loginCheck, crawlerController.crawlRecomCourse);
router.get('/crawl_collection_course', loginCheck, crawlerController.crawlCollectionCourse);
router.get('/crawl_teacher', loginCheck, crawlerController.crawlTeacher);
router.get('/crawl_course_tab', loginCheck, crawlerController.crawlCourseTab);
router.get('/crawl_course_category', loginCheck, crawlerController.crawlCourseCategory);
router.get('/crawl_course_data', loginCheck, crawlerController.crawlCourseData);
router.get('/crawl_course_aboutus', loginCheck, crawlerController.crawlAboutUs);

module.exports = router
