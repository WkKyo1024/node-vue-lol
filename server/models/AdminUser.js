const mongoose = require("mongoose");
// 文章模型
const schema = new mongoose.Schema({
  username: { type: String },
  // 密码加密 用的bcrypt模块
  password: {
    type: String,
    select: false,
    set(val) {
      return require("bcrypt").hashSync(val, 10);
    },
  },
});

module.exports = mongoose.model("AdminUser", schema);
