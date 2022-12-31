const Crawler = require('../libs/crawler'),
  { crawler } = require('../config/config');

Crawler({
  url: crawler.url.aboutus,
  callback() {
    return {
      aid: 1,
      title: document.querySelector('.aiw-intro .aiw-title').textContent,
      name: document.querySelector('.agency-name').textContent,
      intro: document.querySelector('.aiwi-content').textContent
    };
  }
});