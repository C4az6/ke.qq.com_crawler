const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.course,
  callback() {
    const elements = document.querySelectorAll('.agency-courses-content > .kc-row---UI88rW > .kc-col---OaJWB7'),
      data = [];
    elements.forEach((item, index) => {
      let priceText = item.querySelector('.kc-course-card-price-current---iUq7LY').textContent;
      data.push({
        cid: index,
        href: item.querySelector('.kc-course-card-wrapper---D86vD2').href,
        posterUrl: item.querySelector('.kc-course-card-img---LYkVKY > img').src,
        posterKey: "",
        courseName: item.querySelector('.kc-course-card-header---HluDHk > .kc-course-card-name---QUOvPQ').textContent,
        price: priceText === '免费' ? '0' : priceText.replace(/￥/, ''),
        studentCount: item.querySelectorAll('.kc-course-card-footer-info---iNSdzI > span')[1].textContent.replace(/人报名/, ''),
        courseSectionCount: item.querySelector('.kc-course-card-tag---Et_Va3.kc-course-card-tag-chapter---BvIeIq').textContent
      })
    })
    return data;
  }
});