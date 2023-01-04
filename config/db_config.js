const ENV = require('./env_config');
// console.log(">>>>>>>>> ENV ", ENV);
// database相关配置
module.exports = {
  MYSQL_CONF: {
    base: {
      host: 'localhost',
      dialect: 'mysql',
      // 连接池
      pool: {
        // 最大连接数
        max: 5,
        // 最小连接数
        min: 0,
        // 最大空闲时间,毫秒单位
        idle: 10000
      }
    },
    conf: ['txclass', 'root', ENV.isPrd ? 'xxx' : 'root']
  },
  // Redis 配置
  REDIS_CONF: ['6379', '127.0.0.1']
}
