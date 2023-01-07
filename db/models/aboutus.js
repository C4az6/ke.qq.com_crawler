const seq = require('../connection/mysql_connect'),
  { STRING, INT, TEXT } = require('../../config/db_type_config')

const Aboutus = seq.define('aboutus', {
  aid: {
    comment: 'aboutus ID',
    type: INT,
    allowNull: false,
    unique: true
  },
  title: {
    comment: "title",
    type: STRING,
    allowNull: false
  },
  name: {
    comment: 'name',
    type: STRING,
    allowNull: false
  },
  intro: {
    comment: 'introduction',
    type: TEXT
  },
  status: {
    comment: 'aboutus status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = Aboutus