const router = require('koa-router')(),
  cp = require('child_process'),
  { resolve } = require('path');

router.get('/', async (ctx, next) => {
  const script = resolve(__dirname, '../puppeteer/crawler.js'),
    child = cp.fork(script, []);

  let invoked = false;
  child.on('message', data => {
    console.log(data);
  })
  child.on('exit', code => {
    if (invoked) {
      return
    }
    invoked = true;
    console.log("code: ", code);
  })

  child.on('error', err => {
    if (invoked) {
      return;
    }
    invoked = true;
    console.log(err);
  })
});

module.exports = router
