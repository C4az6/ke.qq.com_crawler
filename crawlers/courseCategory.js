const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.course,
  callback() {
    const elements = document.querySelectorAll('.kc-classification-cascader > .cascader-item'),
      data = [];
    elements.forEach((item, index) => {
      data.push({
        cid: index,
        title: item.textContent
      })
    })
    return data;
  }
})