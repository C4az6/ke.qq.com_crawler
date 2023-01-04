const router = require('koa-router')(),
  indexController = require('../controller/Index');

// router.get('/', indexController.index);
router.get('/get_course', indexController.getCourseData)
router.get('/get_teachers', indexController.getTeacherData);

router.get('/get_course_data', indexController.getCourseDatas);
router.get('/get_teacher_data', indexController.getTeacherDatas);

module.exports = router