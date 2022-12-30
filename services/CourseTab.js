const CourseTabModel = require('../db/models/courseTab')
class CourseTabService {
  async addCourseTabData(data) {
    const cid = data.cid;
    // findOne：查询一条数据,where指定查询条件,这里是根据cid来查
    const result = await CourseTabModel.findOne({
      where: { cid }
    });
    if (result) {
      return await CourseTabModel.update(data, {
        where: { cid }
      })
    } else {
      return await CourseTabModel.create(data)
    }
  }
}

// 导出实例对象
module.exports = new CourseTabService();