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

  async getCollectionData() {
    return await CollectionCourseModel.findAll({
      attributes: {
        exclude: ['posterUrl', 'createdAt', 'updatedAt']
      }
    })
  }

  async changeCollectionStatus(id, status) {
    const result = await CollectionCourseModel.update({ status }, {
      where: { id }
    })
    return result[0]
  }
}

module.exports = new CollectionCourseService();