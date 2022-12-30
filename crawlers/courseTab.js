const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.course,
  callback() {
    const elements = document.querySelectorAll('.agency-list-filter-row.agency-list-filter-row-lite.agency-list-filter-label > .agency-list-filter-item');
    let data = [];
    elements.forEach((item, index) => {
      data.push({
        cid: index,
        title: item.textContent
      });
    })
    return data;
  }
})