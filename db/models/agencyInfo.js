const Sequelize = require('sequelize'),
  seq = require('../connection/mysql_connect'),
  { STRING, INT } = require('../../config/db_type_config')

const AgencyInfo = seq.define('agency_info', {
  logoUrl: {
    comment: 'Logo Image Url',
    type: STRING,
    allowNull: false
  },
  name: {
    comment: 'Agency name',
    type: STRING,
    allowNull: false
  },
  feedbackRate: {
    comment: 'Feedback rate',
    type: INT,
    allowNull: false
  },
  studentCount: {
    comment: 'student total count',
    type: INT,
    allowNull: false
  },
  description: {
    comment: 'Agency slogan',
    type: STRING,
    allowNull: false
  },
  logoKey: {
    comment: "Qiniu logo image name",
    type: STRING,
    allowNull: false
  },
  status: {
    comment: 'agency info status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = AgencyInfo