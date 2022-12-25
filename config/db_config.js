// database相关配置
module.exports = {
  mysql: {
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
    conf: ['todos', 'root', 'root']
  }
}
