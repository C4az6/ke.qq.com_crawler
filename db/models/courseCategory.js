const seq = require('../connection/mysql_connect'),
  { STRING, INT } = require('../../config/db_type_config');

const CourseCategory = seq.define('course_category', {
  cid: {
    comment: 'course category id',
    type: INT,
    allowNull: false,
    unique: true
  },
  title: {
    comment: 'course category name',
    type: STRING,
    allowNull: false
  }
})

module.exports = CourseCategory