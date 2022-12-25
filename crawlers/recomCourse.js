const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.main,
  async callback() {
    // 滚动到最底部
    function autoScroll() {
      return new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = 100;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            // 页面触底了
            clearInterval(timer);
            console.log('running autoScroll!!! ');
            resolve();
          }
        }, 100)
      })
    }

    await autoScroll();
    console.log('after autoScroll!!! ')
    const mainTitle = document.querySelectorAll('.gems-section-header')[2].textContent;
    const elements = document.querySelectorAll('.gems-section.gems-section-pc')[3];
    let elList = elements.querySelectorAll('.kc-col---OaJWB7');
    const data = [];
    elList.forEach(item => {
      let price = item.querySelectorAll('.kc-course-card-footer-info---iNSdzI > span')[0].textContent;
      if (price === '免费') {
        price = 0;
      } else {
        price = Number(price.slice(1));
      }
      data.push({
        href: item.querySelector('.js-report-link').href,
        mainTitle,
        title: item.querySelector('.kc-course-card-name---QUOvPQ').textContent,
        posterUrl: item.querySelector('.kc-course-card-img---LYkVKY img').src,
        studentCount: item.querySelectorAll('.kc-course-card-footer-info---iNSdzI > span')[1].textContent.replace('人报名', ''),
        price,
        posterKey: ''
      })
    })
    return data;
  }
})