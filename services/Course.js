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
}

module.exports = new CourseService();