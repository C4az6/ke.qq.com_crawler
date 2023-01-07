const { getCoursesData, changeCourseField, changeCourseStatus } = require('../services/Course');
const { getCourseFieldData } = require('../services/CourseTab');
const { getRecomCourseData, changeRecomCourseStatusData } = require('../services/RecomCourse');
const { API } = require('../config/error_config');
const { returnInfo } = require('../libs/utils')
class Index {
  // 获取所有课程
  async getCourses(ctx, next) {
    const courseData = await getCoursesData(),
      fieldsData = await getCourseFieldData();
    ctx.body = courseData && fieldsData ? returnInfo(API.RETURN_SUCCESS, { courseData, fieldsData }) : returnInfo(API.RETURN_FAILED);
  }

  async getRecomCourses(ctx, next) {
    const data = await getRecomCourseData();
    ctx.body = data ? returnInfo(API.RETURN_SUCCESS, data) : returnInfo(API.RETURN_FAILED);
  }

  // 修改课程关联的分类
  async changeCourseField(ctx, next) {
    const { cid, field } = ctx.request.body,
      result = await changeCourseField(cid, field);
    ctx.body = result ? returnInfo(API.CHANGE_COURSE_FIELD_SUCCESS) : returnInfo(API.CHANGE_COURSE_FIELD_FAILED);
  }

  /* async changeCourseStatus(ctx, next) {
    const { id, status } = ctx.request.body;
    const result = await changeCourseStatus(id, status);
    ctx.body = result ? returnInfo(API.CHANGE_COURSE_STATUS_SUCCESS) : returnInfo(API.CHANGE_COURSE_STATUS_FAILED);
  }

  async changeRecomCourseStatus(ctx, next) {
    const { id, status } = ctx.request.body;
    const result = await changeRecomCourseStatusData(id, status);
    ctx.body = result ? returnInfo(API.CHANGE_COURSE_STATUS_SUCCESS) : returnInfo(API.CHANGE_COURSE_STATUS_FAILED);
  } */

  async changeDataStatus(ctx, next) {
    const { id, status, field } = ctx.request.body;
    let result = null
    switch (field) {
      case 'course':
        result = await changeCourseStatus(id, status);
        break;
      case 'recomCourse':
        result = await changeRecomCourseStatusData(id, status);
        break;
      default:
        ctx.body = returnInfo(API.FIELD_ERROR)
        return;
    }
    ctx.body = result ? returnInfo(API.CHANGE_COURSE_STATUS_SUCCESS) : returnInfo(API.CHANGE_COURSE_STATUS_FAILED);
  }
}

module.exports = new Index()