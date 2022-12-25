const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');
// 课程合集
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
    let rootElements = document.querySelectorAll('.gems-section.gems-section-pc')[1],
      mainTitle = rootElements.querySelector('.gems-section-title').textContent,
      elementList = rootElements.querySelectorAll('.kc-row---UI88rW .kc-col---OaJWB7');

    const data = [];
    elementList.forEach((item, index) => {
      let href = item.querySelector('.js-report-link').href,
        posterUrl = item.querySelector('.kc-course-card-img---LYkVKY > img').src,
        title = item.querySelector('.kc-course-card-name---QUOvPQ').textContent;

      let labels = [];
      item.querySelectorAll('.kc-course-card-label---KF4sN3').forEach(item => {
        labels.push(item.textContent);
      });
      let price = item.querySelector('.kc-course-card-price-current---iUq7LY').textContent;
      if (price === '免费') {
        price = 0
      } else {
        price = Number(price.slice(1)).toFixed(2)
      }

      let studentCount = item.querySelectorAll('.kc-course-card-footer-info---iNSdzI > span')[1].textContent.replace('人报名', '')
      data.push({
        href,
        mainTitle,
        posterUrl,
        posterKey: "",
        title,
        label: labels.toString(),
        price,
        studentCount
      })
    })
    return data;
  }
})