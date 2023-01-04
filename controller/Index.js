const { redisGet, redisSet } = require('../libs/redisClient')

class Index {
  async index(ctx, next) {
    // console.log("ctx: ", ctx.session);
    const sess = ctx.session;
    if (!sess.uid) {
      // session不存在
      sess.uid = 1;
      sess.username = "alexander";
      sess.nickname = 'alexander';
      sess.gender = 'male'
    }

    ctx.body = {
      session: sess
    }

    // await ctx.render('index.ejs')
  }
}

module.exports = new Index()