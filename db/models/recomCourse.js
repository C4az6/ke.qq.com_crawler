const seq = require('../connection/mysql_connect'),
  { STRING, INT, DECIMAL } = require('../../config/db_type_config')

const RecomCourse = seq.define('recom_course', {
  href: {
    comment: "course detail page link",
    type: STRING,
    allowNull: false,
    // 唯一，不能有重复记录
    unique: true
  },
  mainTitle: {
    comment: "Page category title",
    type: STRING,
    allowNull: false
  },
  title: {
    comment: 'course name',
    type: STRING,
    allowNull: false
  },
  posterUrl: {
    comment: 'course poster image',
    type: STRING,
    allowNull: false
  },
  studentCount: {
    comment: 'student count',
    type: STRING,
    allowNull: false
  },
  price: {
    comment: "course price",
    type: DECIMAL,
    allowNull: false
  },
  posterKey: {
    comment: "course poster image qiniu key",
    type: STRING,
    allowNull: false
  },
  status: {
    comment: "recom course status",
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = RecomCourse