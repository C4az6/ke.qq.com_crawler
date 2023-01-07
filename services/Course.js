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

  async changeCourseField(cid, field) {
    const ret = await CourseModel.update({ field }, {
      where: { cid }
    });
    return ret[0]
  }

  async changeCourseStatus(id, status) {
    // result是执行SQL后的返回结果，是一个数组，第一位是表示影响了多少行，如果是0表示更新没有成功
    const result = await CourseModel.update({ status }, {
      where: { cid: id }
    })
    return result[0]
  }
}

module.exports = new CourseService();