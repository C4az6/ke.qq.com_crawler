const seq = require('./connection/mysql_connect');
require('./models');

// 验证是否连接成功
seq.authenticate().then(res => {
  console.log('[+] MYSQL server is connected completely.')
}).catch(err => {
  console.log("[-] MYSQL server has err: ", err);
})


seq.sync({
  // 强制同步,会清空其他的表数据
  // force: true
}).then(res => {
  console.log('数据库表同步成功~');
  // 关闭进程
  process.exit();
}) 
