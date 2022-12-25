// 这是一个Node.js内置的模块，用来创建子进程
const cp = require('child_process'),
  { resolve } = require('path'),
  Qiniu = require('qiniu'),
  { qiniu } = require('../config/config'),
  { nanoid } = require('nanoid');


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
  },
  // 上传图片到七牛云
  qiniuUpload(options) {
    const mac = new Qiniu.auth.digest.Mac(qiniu.keys.ak, qiniu.keys.sk),
      conf = new Qiniu.conf.Config(),
      client = new Qiniu.rs.BucketManager(mac, conf),
      key = nanoid() + options.ext;

    return new Promise((resolve, reject) => {
      client.fetch(options.url, options.bucket, key, (err, ret, info) => {
        if (err) {
          reject(err)
        } else {
          if (info.statusCode === 200) {
            resolve({ key })
          } else {
            reject(info);
          }
        }
      })
    })
  }
}