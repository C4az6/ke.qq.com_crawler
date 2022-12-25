const Sequelize = require('sequelize'),
  seq = require('../connection/mysql_connect'),
  { STRING, INT } = require('../../config/db_type_config')

const Slider = seq.define('slider', {
  // 课程ID
  cid: {
    comment: 'course ID',
    type: INT,
    allowNull: false,
    unique: true
  },
  // 课程地址
  href: {
    comment: 'course detail page link',
    type: STRING,
    allowNull: false
  },
  // 图片地址
  imgUrl: {
    comment: 'course image url',
    type: STRING,
    allowNull: false
  },
  // 图片在七牛云的地址
  imgKey: {
    comment: 'qiniu image name',
    type: STRING,
    allowNull: false
  },
  // 课程标题
  title: {
    comment: 'course title',
    type: STRING,
    allowNull: false
  },
  // 课程状态
  status: {
    comment: 'course status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Slider;