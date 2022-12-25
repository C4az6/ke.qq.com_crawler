const Sequelize = require('sequelize'),
  { mysql } = require('../../config/db_config');
// 初始化sequelize
const seq = new Sequelize(...mysql.conf, mysql.base);
// 验证是否连接成功
seq.authenticate().then(res => {
  console.log('connection ok!')
}).catch(err => {
  console.log("err: ", err);
})

module.exports = seq;