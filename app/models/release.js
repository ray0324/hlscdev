const Schema = require('warehouse').Schema;
const db = require('../services/db');

const ReleaseSchema = new Schema({
  system: { type: String, required: true }, // 系统
  env: { type: String, required: true }, // 环境
  version: { type: String, required: true }, // 版本
  date: { type: String, required: true }, // 日期
  url: { type: String, required: true }, // url
  desc: String // 描述
});


const Release = db.model('posts', ReleaseSchema);

module.exports = Release;
