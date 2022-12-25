const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.main,
  callback() {
    return {
      logoUrl: document.querySelector('.agency-info-ctn .kc-agency-hd-avatar-pc img').src,
      name: document.querySelector('.agency-name-ctn .agency-name').innerHTML,
      // 好评度
      feedbackRate: document.querySelector('.kc-agency-hd-count-ctn .item .val').textContent.replace(/[^0-9]/ig, ''),
      // 学生总数
      studentCount: document.querySelectorAll('.kc-agency-hd-count-ctn .item .val')[1].textContent,
      // 机构描述
      description: document.querySelector('.agency-info .agency-desc').textContent,
      logoKey: ''

    }
  }
})