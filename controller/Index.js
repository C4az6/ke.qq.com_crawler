const { getCoursesData, changeCourseField } = require('../services/Course');
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

  // 修改课程关联的分类
  async changeCourseField(ctx, next) {
    const { cid, field } = ctx.request.body,
      result = await changeCourseField(cid, field);
    ctx.body = result ? returnInfo(API.CHANGE_COURSE_FIELD_SUCCESS) : returnInfo(API.CHANGE_COURSE_FIELD_FAILED);
  }
}

module.exports = new Index()