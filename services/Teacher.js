const TeacherModel = require('../db/models/teacher');

class TeacherService {
  async addTeacherData(data) {
    const tid = data.tid;
    const result = await TeacherModel.findOne({
      where: { tid }
    });
    if (result) {
      // 如果数据已经在数据库中存在则更新操作，否则执行创建操作
      return await TeacherModel.update(data, {
        where: { tid }
      })
    } else {
      return await TeacherModel.create(data);
    }
  }

  async getTeacherData() {
    return await TeacherModel.findAll({
      attributes: {
        exclude: ['teacherImg', 'createdAt', 'updatedAt']
      }
    })
  }

  async changeTeacherStatusData(id, status) {
    const result = await TeacherModel.update({ status }, {
      where: { id }
    })
    return result[0]
  }
}

module.exports = new TeacherService();