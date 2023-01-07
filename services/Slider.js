// services目录作用：每一张表对应一个具体服务

const SliderModel = require('../db/models/slider')
class SliderService {
  async addSliderData(data) {
    /* 
      有一个细节：
      slider表中的cid是唯一的，如果网站数据发生更新了,但是cid没变,这种情况怎么办？
      我们需要在创建数据之前加一些判断:
        如果我们根据cid查到库中已经有数据了，执行更新操作，否则执行新增操作
    */
    const cid = data.cid;
    // findOne：查询一条数据,where指定查询条件,这里是根据cid来查
    const result = await SliderModel.findOne({
      where: { cid }
    });
    if (result) {
      /* 
        查询出来数据了,说明已经有相同cid的数据存在;
        update: 更新数据,第一个参数是更新的数据对象
      */
      return await SliderModel.update(data, {
        where: { cid }
      })
    } else {
      // 说明数据不在库中了，直接增加数据即可
      // 创建数据的过程是异步的
      return await SliderModel.create(data)
    }
  }

  async getSliderData() {
    return await SliderModel.findAll({
      attributes: {
        exclude: ['imgUrl', 'createdAt', 'updatedAt']
      }
    });
  }

  async changeSliderStatusData(id, status) {
    const result = await SliderModel.update({ status }, {
      where: { id }
    })
    return result[0]
  }
}

// 导出实例对象
module.exports = new SliderService();