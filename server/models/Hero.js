const mongoose = require("mongoose");
// 物品模型
const schema = new mongoose.Schema({
  name: { type: String },
  // 头像
  avatar: { type: String },
  // 背景大图
  banner: { type: String },
  // 称号
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
      // 描述
      description: { type: String },
      // 小提示
      tips: { type: String },
    },
  ],
  // 顺风出装
  items1: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
    },
  ],
  // 逆风出装
  items2: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Item",
    },
  ],
  // 使用技巧
  useTips: { type: String },
  // 对抗技巧
  battleTips: { type: String },
  // 团战技巧
  teamTips: { type: String },
  // 羁绊
  partners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
      description: { type: String },
    },
  ],
});

module.exports = mongoose.model("Hero", schema);
