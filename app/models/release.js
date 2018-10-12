const Schema = require('warehouse').Schema;
const db = require('../services/db');

const ReleaseSchema = new Schema({
  system: { type: String, required: true },
  version: { type: String, required: true },
  date: { type: String, required: true },
  url: { type: String, required: true },
  desc: String
});


const Release = db.model('posts', ReleaseSchema);

module.exports = Release;
