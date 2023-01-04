const { REDIS_CONF } = require('../config/db_config')
module.exports = {
  qiniu: {
    keys: {
      ak: "eJejF8rbJftDPmfbJoFHAIYJF3YbtAXB-Fl3d-po",
      sk: "MZ_s4kNc3K882FC44hJ2QA65EPZ7HXmGVND8liPa"
    },
    bucket: {
      tximg: {
        bucket_name: "alexander3714",
        domain: "http://rnf9v5q2r.bkt.gdipper.com/"
      }
    }
  },
  crawler: {
    url: {
      main: "https://msiwei.ke.qq.com/?tuin304a784b=&activeTab=head_recommend&catagoryId=gen_20690",
      course: "https://msiwei.ke.qq.com/?tuin304a784b=&activeTab=head_course",
      teacher: "https://msiwei.ke.qq.com/?tuin304a784b=&activeTab=head_teacher&catagoryId=gen_20690",
      aboutus: "https://msiwei.ke.qq.com/?tuin304a784b=&activeTab=head_introduction"
    }
  },
  sessionInfo: {
    keys: ['c1!s2@d3#f4$+g5%h6^'],   // cookie的加密字符串,随便填写
    name: 'txclass.sid',    // cookie的名称 格式: 项目名.sid
    prefix: 'txclass.sess'  // cookie的前缀 格式: 项目名.sess
  },
  cookieInfo: {
    path: '/',  // cookie下发路径
    httpOnly: true, // 是否不允许修改
    maxAge: 24 * 60 * 60 * 1000 // 最大过期时间,这里是1天
  },
  redisInfo: {
    all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}`
  },
  adminInfo: {
    username: 'admin',
    password: 'admin'
  },
  cryptoSecret: 'SHDSJ@##@dsajdjksa!ds32213'
}