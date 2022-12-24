const pt = require('puppeteer');
(async () => {
  console.log('comming');
  // 启动一个浏览器
  const bs = await pt.launch({
    headless: false
  });
  const url = "https://msiwei.ke.qq.com";
  pg = await bs.newPage();
  await pg.goto(url, {
    timeout: 30 * 1000,
    // 官方推荐使用networkidle2,表示浏览器没有再发送请求
    waitUtil: 'networkidle2'
  });
  const result = await pg.evaluate(() => {
    // 这里的信息可以在开启的测试浏览器的控制台中看到
    console.log(666)
    // 这里的环境就是浏览器页面运行的环境，里面有变量、函数可以直接拿来用
    let $item = document.querySelectorAll('.rotation-chart-item-img');
    let data = [];
    $item.forEach(element => {
      const dataItem = {
        imgUrl: element.src
      };
      data.push(dataItem);
    })
    return data;
  });
  console.log("result: ", result);
  await bs.close();
  process.send(result);
  setTimeout(() => {
    process.exit(0);
  })
})();

