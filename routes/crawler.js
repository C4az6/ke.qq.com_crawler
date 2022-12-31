const router = require('koa-router')(),
  crawlerController = require('../controller/Crawler');

// 给路由增加前缀
router.prefix('/crawler');
// 这里的crawlerController是Crawler类的实例对象，因此可以直接调用实例方法
router.get('/crawl_slider_data', crawlerController.crawlSliderData);
router.get('/crawl_agency_info', crawlerController.crawlAgencyInfo);
router.get('/crawl_recom_course', crawlerController.crawlRecomCourse);
router.get('/crawl_collection_course', crawlerController.crawlCollectionCourse);
router.get('/crawl_teacher', crawlerController.crawlTeacher);
router.get('/crawl_course_tab', crawlerController.crawlCourseTab);
router.get('/crawl_course_category', crawlerController.crawlCourseCategory);
router.get('/crawl_course_data', crawlerController.crawlCourseData);
router.get('/crawl_course_aboutus', crawlerController.crawlAboutUs);

module.exports = router
