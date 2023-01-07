const RecomCourseModel = require('../db/models/recomCourse');

class RecomCourseService {
  async addRecomCourse(data) {
    const href = data.href;
    const result = await RecomCourseModel.findOne({
      where: { href }
    });
    if (result) {
      return await RecomCourseModel.update(data, {
        where: { result }
      })
    } else {
      return await RecomCourseModel.create(data);
    }
  }

  async getRecomCourseData() {
    return await RecomCourseModel.findAll({
      attributes: {
        exclude: ['mainTitle', 'posterUrl', 'createdAt', 'updatedAt']
      }
    })
  }

  async changeRecomCourseStatusData(id, status) {
    return await RecomCourseModel.update({ status }, {
      where: { id }
    })
  }
}

module.exports = new RecomCourseService();