const CollectionCourseModel = require('../db/models/collectionCourse');

class CollectionCourseService {
  async addCollectionCourse(data) {
    const href = data.href;
    const result = await CollectionCourseModel.findOne({
      where: { href }
    });
    if (result) {
      return await CollectionCourseModel.update(data, {
        where: { href }
      })
    } else {
      return await CollectionCourseModel.create(data);
    }
  }
}

module.exports = new CollectionCourseService();