const { startProcess } = require('../libs/utils');

/* 爬虫类 */
class Crawler {
  // 爬取轮播图数据
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      async message(data) {
        console.log(data);
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    })
  }
}

module.exports = new Crawler();