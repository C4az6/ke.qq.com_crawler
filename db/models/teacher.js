const Sequelize = require('sequelize'),
  seq = require('../connection/mysql_connect'),
  { STRING, INT, DECIMAL, TEXT } = require('../../config/db_type_config')

const Teacher = seq.define('teacher', {
  tid: {
    comment: 'teacher id',
    type: INT,
    allowNull: false,
    unique: true
  },
  href: {
    comment: 'the link to teacher detail page',
    type: STRING,
    allowNull: true
  },
  teacherName: {
    comment: 'teacher name',
    type: STRING,
    allowNull: false
  },
  teacherImg: {
    comment: 'teacher image url',
    type: STRING,
    allowNull: false
  }, teacherImgKey: {
    comment: 'teacher image url for qiniu key',
    type: STRING,
    allowNull: false
  },
  courseCounter: {
    comment: 'course count of the teacher',
    type: INT,
    allowNull: false
  },
  studentCount: {
    comment: 'student count of the teacher',
    type: STRING,
    allowNull: false
  },
  intro: {
    comment: 'teacher introduction',
    type: TEXT,
    allowNull: false
  }
})

module.exports = Teacher