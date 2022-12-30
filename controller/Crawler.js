const { startProcess, qiniuUpload } = require('../libs/utils'),
  { addSliderData } = require('../services/Slider'),
  { addAgencyInfo } = require('../services/AgencyInfo'),
  { addRecomCourse } = require('../services/RecomCourse'),
  { addCollectionCourse } = require('../services/CollectionCourse'),
  { addTeacherData } = require('../services/Teacher'),
  { addCourseTabData } = require('../services/CourseTab'),
  config = require('../config/config')

/* 爬虫类 */
class Crawler {
  // 爬取轮播图数据
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      async message(data) {
        data.map(async item => {
          if (item.imgUrl && !item.imgKey) {
            const qiniu = config.qiniu;
            try {
              const imgData = await qiniuUpload({
                url: item.imgUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg'
              });
              if (imgData.key) {
                item.imgKey = imgData.key;
              };

              // 插入数据
              const result = await addSliderData(item);
              if (result) {
                console.log("Data create OK")
              } else {
                console.log("Data create Faild");
              }

            } catch (error) {
              console.log("error: ", error);
            }
          }
          console.log("crawler data: ", data);
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    })
  }
  // 爬取机构信息数据
  crawlAgencyInfo() {
    startProcess({
      path: '../crawlers/agencyInfo.js',
      async message(data) {
        if (data.logoUrl && !data.logoKey) {
          const qiniu = config.qiniu
          try {
            const logoData = await qiniuUpload({
              url: data.logoUrl,
              bucket: qiniu.bucket.tximg.bucket_name,
              ext: '.jpg'
            });
            if (logoData.key) {
              data.logoKey = logoData.key;
            };
            console.log("logoData: ", logoData);

            // 插入数据
            const result = await addAgencyInfo(data);
            if (result) {
              console.log("DATA CREATE OK.");
            } else {
              console.log("DATA CREATE FAIL!!!!!")
            }
          } catch (error) {
            console.log("error: ", error);
          }
        }

      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    })
  }
  // 爬取推荐课程数据
  crawlRecomCourse() {
    startProcess({
      path: '../crawlers/recomCourse.js',
      async message(data) {
        data.map(async item => {
          if (item.posterUrl && !item.posterKey) {
            const qiniu = config.qiniu
            try {
              // 上传课程封面
              const posterData = await qiniuUpload({
                url: item.posterUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg'
              });
              if (posterData.key) {
                item.posterKey = posterData.key;
              }

              // 插入数据
              const result = await addRecomCourse(item);
              if (result) {
                console.log("DATA CREATE OK.");
              } else {
                console.log("DATA CREATE FAIL!!!!!")
              }
            } catch (error) {
              console.log("error: ", error);
            }
          }
          console.log("data: ", data);
        })

      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    })
  }
  // 爬取课程集合的数据
  crawlCollectionCourse() {
    startProcess({
      path: '../crawlers/collection.js',
      async message(data) {
        data.map(async item => {
          if (item.posterUrl && !item.posterKey) {
            const qiniu = config.qiniu;
            try {
              const posterData = await qiniuUpload({
                url: item.posterUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg'
              });
              if (posterData.key) {
                item.posterKey = posterData.key;
                console.log("posterData.key: ", posterData.key);
              }

              // 插入数据
              const result = await addCollectionCourse(item);
              if (result) {
                console.log("DATA CREATE OK");
              } else {
                console.log("ERROR!!! DATA CREATE FAILD");
              }

            } catch (error) {
              console.log("error: ", error);
            }
          }
        })
        console.log("process receive data: ", data);
      },
      async exit(code) {
        console.log("process exit code: ", code)
      },
      async error(error) {
        console.log("process error: ", error)
      }
    })
  }
  // 爬取老师信息
  crawlTeacher() {
    startProcess({
      path: '../crawlers/teacher.js',
      async message(data) {
        data.map(async item => {
          if (item.teacherImg && !item.teacherImgKey) {
            // 如果图片存在并且没有上传到七牛云，那么执行上传操作
            const qiniu = config.qiniu;
            try {
              const teacherData = await qiniuUpload({
                url: item.teacherImg,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg'
              });
              if (teacherData.key) {
                item.teacherImgKey = teacherData.key;
                console.log("teacherData.key: ", teacherData.key);
              }

              // 插入数据
              const result = await addTeacherData(item);
              if (result) {
                console.log("DATA CREATE OK");
              } else {
                console.log("ERROR!!! DATA CREATE FAILD");
              }

            } catch (error) {
              console.log("error: ", error);
            }
          }
        })
        console.log("process receive data: ", data);
      },
      async exit(code) {
        console.log("process exit code: ", code)
      },
      async error(error) {
        console.log("process error: ", error)
      }
    })
  }
  // 爬取课程分类
  crawlCourseTab() {
    startProcess({
      path: '../crawlers/courseTab.js',
      async message(data) {
        data.map(async item => {
          // 插入数据
          const result = await addCourseTabData(item);
          if (result) {
            console.log("DATA CREATE OK");
          } else {
            console.log("ERROR!!! DATA CREATE FAILD");
          }
        })
        console.log("process receive data: ", data);
      },
      async exit(code) {
        console.log("process exit code: ", code)
      },
      async error(error) {
        console.log("process error: ", error)
      }
    })
  }
}

module.exports = new Crawler();