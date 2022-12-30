const CourseCategoryModel = require('../db/models/courseCategory')
class CourseCategoryService {
  async addCourseCategoryData(data) {
    const cid = data.cid;
    // findOne：查询一条数据,where指定查询条件,这里是根据cid来查
    const result = await CourseCategoryModel.findOne({
      where: { cid }
    });
    if (result) {
      return await CourseCategoryModel.update(data, {
        where: { cid }
      })
    } else {
      return await CourseCategoryModel.create(data)
    }
  }
}

// 导出实例对象
module.exports = new CourseCategoryService();