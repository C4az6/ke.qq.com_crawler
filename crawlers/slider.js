const crawler = require('../libs/crawler');

crawler({
  url: 'https://msiwei.ke.qq.com/',
  callback() {
    const elements = document.querySelectorAll('.rotation-chart-item-img'),
      data = [];

    elements.forEach(item => {
      data.push({
        imgUrl: item.src,
        imgKey: ''
      })
    });
    return data;
  }
})