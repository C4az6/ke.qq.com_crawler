const seq = require('../connection/mysql_connect'),
  { STRING, INT } = require('../../config/db_type_config');

const Course = seq.define('course', {
  cid: {
    comment: 'course ID',
    type: INT,
    allowNull: false,
    unique: true
  },
  href: {
    comment: 'course detail page link',
    type: STRING,
    allowNull: false
  },
  posterUrl: {
    comment: 'course image url',
    type: STRING,
    allowNull: false
  },
  courseName: {
    comment: 'course name',
    type: STRING,
    allowNull: false
  },
  price: {
    comment: 'course price',
    type: STRING,
    allowNull: false
  },
  studentCount: {
    comment: 'the count of the students who joined the course',
    type: STRING,
    allowNull: false
  },
  field: {
    comment: 'the course concerned the tab',
    type: INT,
    allowNull: false
  },
  posterKey: {
    comment: 'qiniu course image name',
    type: STRING,
    allowNull: false
  },
  courseSectionCount: {
    comment: 'course section count',
    type: STRING,
    allowNull: false
  },
  status: {
    comment: 'course status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = Course