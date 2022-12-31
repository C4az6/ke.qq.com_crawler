const pt = require('puppeteer');

// 接收一个options对象做为参数
module.exports = async function (options) {
  // 启动一个浏览器
  const bs = await pt.launch(),
    // 新建一个标签页
    pg = await bs.newPage(),
    url = options.url;
  /* 
    跳转到指定页面；
    waitUtil: 'networkidle2'，表示没有网络请求发送的情况下再执行后面逻辑
  */
  await pg.goto(url, {
    waitUtil: 'networkidle2'
  });
  // pg.evaluate用来分析页面
  const result = await pg.evaluate(options.callback);
  // console.log("result: ", result);
  // 关闭浏览器
  await bs.close();
  // 给主进程发送数据

  process.send(result);

  setTimeout(() => {
    // 延时关闭进程
    process.exit(0);
  }, 1000)
}