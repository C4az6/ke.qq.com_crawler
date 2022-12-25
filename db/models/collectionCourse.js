const Sequelize = require('sequelize'),
  seq = require('../connection/mysql_connect'),
  { STRING, INT, DECIMAL } = require('../../config/db_type_config')

const CollectionCourse = seq.define('collection_course', {
  href: {
    comment: "collection course link",
    type: STRING,
    allowNull: false,
    unique: true
  },
  mainTitle: {
    comment: "collection course mainTitle",
    type: STRING,
    allowNull: false
  },
  title: {
    comment: "collection course title",
    type: STRING,
    allowNull: false
  },
  posterUrl: {
    comment: "collection course poster image url",
    type: STRING,
    allowNull: false
  },
  posterKey: {
    comment: "collection course poster image key for qiniu",
    type: STRING,
    allowNull: false
  },
  studentCount: {
    comment: "collection course student counter",
    type: STRING,
    allowNull: false
  },
  price: {
    comment: "collection course price",
    type: DECIMAL,
    allowNull: false
  },
  label: {
    comment: "collection course label",
    type: STRING,
    allowNull: true
  }
})

module.exports = CollectionCourse