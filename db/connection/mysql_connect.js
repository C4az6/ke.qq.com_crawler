const Sequelize = require('sequelize'),
  { mysql } = require('../../config/db_config');
// 初始化sequelize
const seq = new Sequelize(...mysql.conf, mysql.base);

module.exports = seq;