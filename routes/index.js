const router = require('koa-router')();
const indexController = require('../controller/Index');
const loginCheck = require('../middlewares/loginCheck')

/* 
  使用loginCheck中间件进行接口的登录鉴权。
  意味着访问命中这条路由后先执行loginCheck中间件方法，如果loginCheck中调用next函数,才会执行indexController.getCourses。
*/
router.get('/get_courses', loginCheck, indexController.getCourses);
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses);
router.get('/get_sliders', loginCheck, indexController.getSliders)
router.get('/get_collections', loginCheck, indexController.getCollections);
router.get('/get_teachers', loginCheck, indexController.getTeachers);


router.post('/change_course_field', loginCheck, indexController.changeCourseField);
// router.post('/change_course_status', loginCheck, indexController.changeCourseStatus);
// router.post('/change_recom_course_status', loginCheck, indexController.changeRecomCourseStatus)
router.post('/change_status', loginCheck, indexController.changeDataStatus);


module.exports = router