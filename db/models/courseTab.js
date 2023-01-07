const seq = require('../connection/mysql_connect'),
  { STRING, INT } = require('../../config/db_type_config');

const CourseTab = seq.define('course_tab', {
  cid: {
    comment: 'course tab id',
    type: INT,
    allowNull: false,
    unique: true
  },
  title: {
    comment: 'course tab name',
    type: STRING,
    allowNull: false
  },
  status: {
    comment: 'course tab status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = CourseTab