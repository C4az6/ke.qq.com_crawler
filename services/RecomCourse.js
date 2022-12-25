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
}

module.exports = new RecomCourseService();