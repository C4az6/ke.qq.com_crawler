const CourseModel = require('../db/models/course');

class CourseService {
  async addCourseData(data) {
    const cid = data.cid;
    const result = await CourseModel.findOne({
      where: { cid }
    });
    if (result) {
      return await CourseModel.update(data, {
        where: { cid }
      })
    } else {
      return await CourseModel.create(data);
    }
  }

  async getCoursesData() {
    // findAll 查询所有数据, 注意：返回的是一个Promise对象，外面也要通过 await 来接收
    return await CourseModel.findAll({
      attributes: {
        // 配置忽略的字段
        exclude: ['posterUrl', 'createdAt', 'updatedAt']
      }
    });
  }
}

module.exports = new CourseService();