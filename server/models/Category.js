const mongoose = require("mongoose");
// 分类模型
const schema = new mongoose.Schema({
  name: { type: String },
  // ref关联的模型
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Category", schema);
