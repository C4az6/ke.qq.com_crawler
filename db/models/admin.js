const seq = require('../connection/mysql_connect'),
  { STRING, TEXT, INT } = require('../../config/db_type_config');

const Admin = seq.define('admin', {
  username: {
    comment: 'admin username',
    type: STRING,
    allowNull: false
  },
  password: {
    comment: 'crypto user password',
    type: STRING,
    allowNull: false
  },
  status: {
    comment: 'admin account status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = Admin