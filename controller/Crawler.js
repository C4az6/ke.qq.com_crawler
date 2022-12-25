const { startProcess, qiniuUpload } = require('../libs/utils'),
  config = require('../config/config')

/* 爬虫类 */
class Crawler {
  // 爬取轮播图数据
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      async message(data) {
        data.map(async item => {
          if (item.imgUrl && !item.img_key) {
            const qiniu = config.qiniu;
            try {
              const imgData = await qiniuUpload({
                url: item.imgUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ak: qiniu.keys.ak,
                sk: qiniu.keys.sk,
                ext: '.jpg'
              });
              if (imgData.key) {
                item.imgKey = imgData.key;
              };
            } catch (error) {
              console.log("error: ", error);
            }
          }
          console.log("crawler data: ", data);
        });
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