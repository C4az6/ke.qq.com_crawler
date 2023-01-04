
const redis = require('redis'),
  { REDIS_CONF } = require("../../config/db_config");

const reds = redis.createClient(REDIS_CONF);
reds.on('error', error => {
  console.log("Redis Error: ", error);
});

module.exports = reds;

