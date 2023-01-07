const { getCoursesData } = require('../services/Course');
const { getCourseFieldData } = require('../services/CourseTab')
const { API } = require('../config/error_config');
const { returnInfo } = require('../libs/utils')
class Index {
  // 获取所有课程
  async getCourses(ctx, next) {
    const courseData = await getCoursesData(),
      fieldsData = await getCourseFieldData();
    ctx.body = courseData && fieldsData ? returnInfo(API.RETURN_SUCCESS, { courseData, fieldsData }) : returnInfo(API.RETURN_FAILED);
  }
}

module.exports = new Index()