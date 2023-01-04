const { redisGet, redisSet } = require('../libs/redisClient');
const { getCourses } = require('../services/Course')
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

  async getCourseData(ctx, next) {
    const data = await getCourses();
    ctx.body = data
  }

  async getTeacherData(ctx, next) {

  }

  async getCourseDatas(ctx, next) {

  }

  async getTeacherDatas(ctx, next) {

  }
}

module.exports = new Index()