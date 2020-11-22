module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-lol', {
    // 避免“当前URL字符串解析器已被弃用”警告
    useNewUrlParser: true
  })
}