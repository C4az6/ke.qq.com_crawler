const redis = require('../db/connection/redis_connect');

function redisSet(key, value, timeout = 60 * 60) {
  if (typeof (value) === 'object') {
    value = JSON.stringify(value);
  }

  redis.set(key, value);
  redis.expire(key, timeout);
}

function redisGet(key) {
  return new Promise((resolve, reject) => {
    redis.get(key, (error, value) => {
      if (error) {
        return reject(error);
      }

      if (value === null) {
        return resolve(null);
      }

      try {
        // 如果这里报错了，说明value不是一个JSON对象，可以直接在catch里面resolve,try的目的是忽略错误
        resolve(JSON.parse(value))
      }
      catch (error) {
        resolve(value)
      }
    });
  })
}

module.exports = {
  redisSet,
  redisGet
}