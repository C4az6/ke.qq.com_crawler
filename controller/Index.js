const { getCoursesData } = require('../services/Course');
const { API } = require('../config/error_config');
const { returnInfo } = require('../libs/utils')
class Index {
  async getCourses(ctx, next) {
    const data = await getCoursesData();
    ctx.body = data ? returnInfo(API.RETURN_SUCCESS, data) : returnInfo(API.RETURN_FAILED);
  }

  async getTeacherData(ctx, next) {

  }

  async getCourseDatas(ctx, next) {

  }

  async getTeacherDatas(ctx, next) {

  }
}

module.exports = new Index()