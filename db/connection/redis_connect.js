const redis = require('redis'),
  { REDIS_CONF } = require("../../config/db_config");

const redis = redis.createClient(REDIS_CONF);
redis.on('error', error => {
  console.log("Redis Error: ", error);
});


module.exports = redis;