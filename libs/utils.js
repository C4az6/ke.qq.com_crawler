// 这是一个Node.js内置的模块，用来创建子进程
const cp = require('child_process'),
  { resolve } = require('path');

module.exports = {
  startProcess(options) {
    const script = resolve(__dirname, options.path),
      child = cp.fork(script, []);
    // 子进程是否被调用了,默认false
    let invoked = false;
    // 监听子进程发送数据过来
    child.on('message', data => {
      options.message(data);
    });

    // 监听子进程结束
    child.on('exit', code => {
      if (invoked) {
        return
      }
      invoked = true;
      options.exit(code);
    })

    // 监听子进程报错
    child.on('error', err => {
      if (invoked) {
        return
      }
      invoked = true;
      options.error(err);
    })
  }
}