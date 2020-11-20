const mongoose = require("mongoose");
// 物品模型
const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String },
  // 英雄类型
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  scores: {
    attack: { type: Number },
    skills: { type: Number },
    defense: { type: Number },
    difficult: { type: Number },
  },
  skills: [
    {
      icon: { type: String },
      name: { type: String },
      description: { type: String },
      tips: { type: String },
    },
  ],
  items1: [
    {
      type: mongoose.SchemaType.ObjectId,
      ref: "Item",
    },
  ],
  items2: [
    {
      type: mongoose.SchemaType.ObjectId,
      ref: "Item",
    },
  ],
  useTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  partners: [
    {
      hero: { type: mongoose.SchemaType.ObjectId, ref: "Hero" },
      description: { type: String },
    },
  ],
});

module.exports = mongoose.model("Hero", schema);
