const mongoose = require("mongoose");
// 文章模型
const schema = new mongoose.Schema({
  name: { type: String },
  items: [
    {
      image: {
        type: String,
      },
      url: {
        type: String,
      },
      title: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Ad", schema);
