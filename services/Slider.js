// services目录作用：每一张表对应一个具体服务

const SliderModel = require('../db/models/slider')
class SliderService {
  async addSliderData(data) {
    // 创建数据的过程是异步的
    return await SliderModel.create(data)
  }
}

// 导出实例对象
module.exports = new SliderService();