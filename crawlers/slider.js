const crawler = require('../libs/crawler');

crawler({
  url: 'https://msiwei.ke.qq.com/',
  callback() {
    const elements = document.querySelectorAll('.rotation-chart-item-img'),
      data = [];
    const cids = [1, 2]
    elements.forEach((item, index) => {
      data.push({
        cid: cids[index],
        href: "https://youkewang.top/",
        imgUrl: item.src,
        imgKey: ''
      })
    });
    return data;
  }
})