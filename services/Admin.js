const AdminModel = require('../db/models/admin');

class AdminService {
  async addAdminData(adminInfo) {
    const { username } = adminInfo
    const result = await AdminModel.findOne({
      where: { username }
    });
    if (result) {
      return await AdminModel.update(adminInfo, {
        where: { username }
      })
    } else {
      return await AdminModel.create(adminInfo);
    }
  }
}

module.exports = new AdminService;