// 爬取讲师信息
const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config')

Crawler({
  url: crawler.url.teacher,
  callback() {
    const elements = document.querySelectorAll('.teacher-list-card-pc');
    const data = [];
    elements.forEach((item, index) => {
      data.push({
        tid: index + 1,
        href: "",
        teacherName: item.querySelector('.tlci-title-pc').textContent,
        teacherImg: item.querySelector('.tlc-avatar').src,
        teacherImgKey: "",
        courseCounter: parseInt(item.querySelectorAll('.tlci-detail-pc .tlci-num')[0].textContent),
        studentCount: item.querySelectorAll('.tlci-detail-pc .tlci-num')[1].textContent,
        intro: item.querySelector('.tlci-summary-pc').textContent
      })
    });
    return data;
  }
})
