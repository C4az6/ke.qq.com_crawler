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

  async login(userInfo) {
    const { username, password } = userInfo;
    const usernameExist = await AdminModel.findOne({
      where: { username }
    });
    if (!usernameExist) {
      return 10003
    }
    const dbPassword = usernameExist.get('password');
    if (password !== dbPassword) {
      return 10004
    }

    const uid = usernameExist.get('id');
    return {
      uid,
      username
    }
  }
}

module.exports = new AdminService;