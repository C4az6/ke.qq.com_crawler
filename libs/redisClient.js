const redis = require('../db/connection/redis_connect');

function redisSet(key, value, timeout = 60 * 60) {
  // console.log('>>>>>>>> starting set reids key: ', key, value);
  if (typeof (value) === 'object') {
    value = JSON.stringify(value);
  }

  redis.set(key, value);
  redis.expire(key, timeout);
}

function redisGet(key) {
  console.log("get key: ", key)
  return new Promise((resolve, reject) => {
    redis.get(key, (error, value) => {
      console.log('comming111')
      if (error) {
        console.log('comming2222');
        reject(error);
        return;
      }

      if (value === null) {
        console.log('comming3333');
        resolve(null);
        return
      }

      try {
        console.log("try value: ", value)
        // 如果这里报错了，说明value不是一个JSON对象，可以直接在catch里面resolve,try的目的是忽略错误
        resolve(JSON.parse(value))
      }
      catch (error) {
        console.log('catch value: ', value);
        console.log(">>>>>>> redis client error: ", error);
        resolve(value)
      }
    });
  })
}

module.exports = {
  redisSet,
  redisGet
}