const mongoose = require("mongoose");
// 分类模型
const schema = new mongoose.Schema({
  name: { type: String },
  // ref关联的模型
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
});

// schema.virtual("children", {
//   localField: "_id",
//   foreignField: "parent",
//   justOne: false,
//   ref: "Category",
// });

// schema.virtual("newList", {
//   localField: "_id",
//   foreignField: "categories",
//   justOne: false,
//   ref: "Acticle",
// });

module.exports = mongoose.model("Category", schema);
