const Database = require('warehouse');
const path = require('path');

const DB_PATH = path.resolve('/fixtures/db.json');
console.log(DB_PATH);
const db = new Database({ path: DB_PATH });

module.exports = db;
