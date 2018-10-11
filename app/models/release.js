const Schema = require('warehouse').Schema;
const db = require('../services/db');

const PostSchema = new Schema({
  title: String,
  created: { type: Date, default: Date.now }
});


const Post = db.model('posts', PostSchema);

module.exports = Post;
